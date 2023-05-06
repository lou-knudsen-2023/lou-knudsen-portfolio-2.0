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
  alignContent?: string
}

export interface Projects {
  id: number
  name: string
  description: string
  tech: string
  role: string
  experience: string
  learnings: string
  status: string
  stretch: string
}

export interface UpdateProject {
  id: number
  name: string
  description: string
  tech: string
  role: string
  experience: string
  learnings: string
  status: string
  stretch: string
}
