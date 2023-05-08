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
    <Container className="posts">
      {post.map((post) => (
        <Grid key={post.id} container spacing={4}>
          <CardActionArea component="a" href="#">
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
                image={post.image}
                alt={`a screenshot of the webpage for project ${post.name}`}
              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Container>
  )
      }


