import { PaletteOptions } from '@mui/material'

export interface Palette {
  tertiary: PaletteOptions['primary']
}

export interface StyledProps {
  component?: string
  variant?: string
  alt?: string
  textAlign?: string
  align?: string
  color?: string
}
