export type LogType = 'error' | 'warn' | 'info'
export type LogLevel = LogType | 'silent'
export interface GlobalCLIOptions {
  '--'?: string[]
  root?: string
  test?: string
}
