import * as React from 'react'
import { Container, Typography, Box } from '@mui/material'
import AllProjects from './AllProjects'

// import Link from '@mui/material/Link'

export default function Home() {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              margin: '2rem',
              textAlign: 'center',
              marginTop: '4rem',
              marginBottom: '1rem',
            }}
            gutterBottom
          >
            Lou Knudsen
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              marginLeft: '2rem',
              marginRight: '2rem',
              textAlign: 'center',
              marginBottom: '4rem',
              marginTop: '1rem',
            }}
            gutterBottom
          >
            full stack software developer
          </Typography>
        </Box>
      </Container>
      <AllProjects
        post={{
          name: '',
          date: '',
          blurb: '',
          description: '',
          tech: '',
          role: '',
          experience: '',
          learnings: '',
          status: '',
          stretch: '',
          image: '',
        }}
      />
    </>
  )
}
