import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material'

import { Projects } from '../../commons/model'

interface Props {
  props: Projects[]
}

export default function CardSummary(props: Props) {
  const {
    name,
    date,
    blurb,
    description,
    tech,
    role,
    experience,
    learnings,
    status,
    stretch,
    image,
  } = props

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea id={name} component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={image}
            alt={image}
          />
        </Card>
      </CardActionArea>
    </Grid>
  )
}
