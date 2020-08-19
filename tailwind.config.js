/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
      extend: {
          theme: {
              fontFamily: {
                'sans': ['-apple-system', 'BlinkMacSystemFont']
              }
          },
          colors: {
              theme_primary_light: 'var(--theme-primary_light)',
              theme_primary: 'var(--theme-primary)',
              theme_primary_dark: 'var(--theme-primary_dark)',
              theme_secondary: 'var(--theme-secondary)',
              primary_light: 'var(--color-primary_light)',
              primary: 'var(--color-primary)',
              primary_dark: 'var(--color-primary_dark)',
              secondary: '#f4f5f7',
              info: '#11cdef',
              success: '#2dce89',
              danger: '#f5365c',
              warning: '#fb6340',
              default: '#718096',
          },
          borderRadius: {
              'xl': '1rem',
            },
      },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
