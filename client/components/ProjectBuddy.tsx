import * as React from 'react'
import { Container, Typography, Box } from '@mui/material'

export default function ProjectBuddy() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            margin: '2rem',
            textAlign: 'center',
            marginTop: '4rem',
            marginBottom: '1rem',
          }}
          gutterBottom
        >
          BUDDY
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginLeft: '2rem',
            marginRight: '2rem',
            textAlign: 'center',
            marginBottom: '4rem',
            marginTop: '1rem',
          }}
          gutterBottom
        >
          Full stack website connecting those new to Wellington with the locals.
        </Typography>
      </Box>
    </Container>
  )
}
