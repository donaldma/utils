export const LoggerService = {
  log: (message: string) => {
    console.log(`> ${message}`)
  },

  newLine: (message: string) => {
    return `${message}\n`
  }
}