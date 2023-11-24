import { loadEnv } from 'vite'

export const wrapperEnv = (mode: string, process: NodeJS.Process): Record<keyof ViteEnv, string> => {
  return loadEnv(mode, process.cwd())
}
