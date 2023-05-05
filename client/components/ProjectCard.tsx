import {
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Container,
} from '@mui/material'
// import { StyledProps } from "../../commons/model";

export default function ProjectCard() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item margin={'10px'}>
          <CardActionArea id="buddy" component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  Buddy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  This was my final project for my Devacademy course.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image=""
                alt=""
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item margin={'10px'}>
          <CardActionArea id="react-game" component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  Buddy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  This was my final project for my Devacademy course.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image=""
                alt=""
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item margin={'10px'}>
          <CardActionArea id="lost-and-found" component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  Buddy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  This was my final project for my Devacademy course.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image=""
                alt=""
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item margin={'10px'}>
          <CardActionArea id="onemoreproject" component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  Buddy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  This was my final project for my Devacademy course.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image=""
                alt=""
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </>
  )
}

// export default function FeaturedPost(props: StyledProps) {
//   // const { XX } = props;
