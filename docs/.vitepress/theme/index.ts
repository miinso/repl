import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      // app.component('Repl', Repl) // no work

      const mod = await import('@vue/repl') // works
      app.component('Repl', mod.Repl)
    }
  },
}
