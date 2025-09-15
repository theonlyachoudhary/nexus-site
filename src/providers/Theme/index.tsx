'use client'

import React, { createContext, useCallback, use, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'
import { defaultTheme, getImplicitPreference, themeLocalStorageKey } from './shared'
import { themeIsValid } from './types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined>('light')

  const setTheme = useCallback((themeToSet: Theme | null) => {
    // Force light theme only - ignore any theme changes
    setThemeState('light')
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  useEffect(() => {
    // Always force light theme
    const themeToSet: Theme = 'light'
    document.documentElement.setAttribute('data-theme', themeToSet)
    setThemeState(themeToSet)
    // Clear any existing theme preference from localStorage
    window.localStorage.removeItem(themeLocalStorageKey)
  }, [])

  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
