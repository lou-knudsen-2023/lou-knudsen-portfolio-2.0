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
import { useNavigate } from 'react-router-dom';


interface ProjectsPostProps {
  post: {
    id: Number
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

  const navigate = useNavigate();

  useEffect(() => {
    getAllProjectsCS()
      .then((data) => {
        setProjects(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleNav = (id: Number) => {
    navigate(`/api/v1/projects/${post.id}`)
  }

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={6} justifyContent="center" >

        {post.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={6} style={{width: '100%'}}>
            <CardActionArea component="a" >
            <Link key={post.id} to={`/api/v1/projects/${post.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ display: 'flex', flexDirection: 'row', minHeight: '200px', minWidth: '350px' }}>
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
                  sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
                  src={`data:image/png;base64, ${post.image}`}
                  alt={`a screenshot of the webpage for project ${post.name}`}
                />
              </Card>
          </Link>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
        }
  