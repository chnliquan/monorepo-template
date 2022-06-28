declare const __DEV__: boolean
declare const __TEST__: boolean
declare const __GLOBAL__: boolean

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {}
