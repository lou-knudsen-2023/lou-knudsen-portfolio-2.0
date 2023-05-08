import * as React from 'react'
import { Container, Typography, Box } from '@mui/material'

export default function ProjectLostAndFound() {
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
          LOST AND FOUND
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
          A website to post lost animals and find animals that are lost
        </Typography>
      </Box>
    </Container>
  )
}
