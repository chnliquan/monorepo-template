const path = require('path')
const { minimist, run, logger, chalk } = require('@eljs/node-utils')

const { targets: allTargets, fuzzyMatchTarget, bin, runParallel } = require('./utils')

const args = minimist(process.argv.slice(2))
const targets = args._
const devAllMatching = args.all || args.a
const step = logger.step('Dev')

main()

async function main() {
  if (!targets.length) {
    await devAll(allTargets)
  } else {
    await devAll(fuzzyMatchTarget(targets, devAllMatching))
  }
}

async function devAll(targets) {
  await runParallel(require('os').cpus().length, targets, dev)
}

async function dev(target) {
  const pkgDir = path.resolve(`packages/${target}`)
  const pkg = require(`${pkgDir}/package.json`)

  if (pkg.private) {
    return
  }

  step(`Watching ${chalk.green.bold(pkg.name)}`)
  await run(bin('rollup'), ['-c', '-w', '--environment', [`FORMATS:cjs`, `TARGET:${target}`]])
}
