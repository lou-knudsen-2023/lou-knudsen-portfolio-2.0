import {
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Container,
  Link,
  Box,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllProjectsCS } from '../apis/apiClientExample'
import { Projects } from '../../commons/model'

interface ProjectsPostProps {
  post: {
    name: string
    date: string
    blurb: string
    description: string
    tech: string
    role: string
    experience: string
    learnings: string
    status: string
    stretch: string
    image: string
  }
}

export default function AllProjects(props: ProjectsPostProps) {
  const [post, setProjects] = useState<Projects[]>([])

  useEffect(() => {
    getAllProjectsCS()
      .then((data) => {
        setProjects(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <Container maxWidth='lg'>
      <Grid container spacing={4}>
 
      {post.map((post) => (
        <Grid key={post.id}>
          <CardActionArea component="a" href="#" sx={{maxWidth: "350px"}}>
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.blurb}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                src={`data:image/png;base64, ${post.image}`}
                alt={`a screenshot of the webpage for project ${post.name}`}

              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}


