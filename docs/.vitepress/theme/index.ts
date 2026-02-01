import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const mod = await import('@vue/repl')
      app.component('Repl', mod.Repl)
    }
  },
}
