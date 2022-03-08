const path = require('path')
const { minimist, run, logger } = require('@eljs/node-utils')
const { step, release } = require('@eljs/release')

const args = minimist(process.argv.slice(2))
const skipTests = args.skipTests
const skipBuild = args.skipBuild

main()

async function main() {
  const { stdout } = await run('git', ['status', '--porcelain'], {
    stdio: 'pipe',
  })

  if (stdout) {
    logger.printErrorAndExit('Your git status is not clean. Aborting.')
  }

  // run tests before releadse
  step('Running tests ...')
  if (!skipTests) {
    await run(bin('jest'), ['--clearCache'])
    await run('pnpm', ['test:once'])
  } else {
    console.log(`(skipped)`)
  }

  // build all packages with types
  step('Building all packages ...')
  if (!skipBuild) {
    await run('pnpm', ['run', 'build', '--', '--release'])
  } else {
    console.log(`(skipped)`)
  }

  release({
    checkGitStatus: false,
  })
}

function bin(name) {
  return path.resolve(__dirname, '../node_modules/.bin/' + name)
}
