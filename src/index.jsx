import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Global } from './Global.styles.js'
import { theme } from './theme'
import { Web } from './Web/Web'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Web />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
