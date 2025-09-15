import Script from 'next/script'
import React from 'react'

import { themeLocalStorageKey } from '../shared'

export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    // Force light theme only
    var themeToSet = 'light'
    
    // Clear any existing theme preferences
    window.localStorage.removeItem('${themeLocalStorageKey}')
    
    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
