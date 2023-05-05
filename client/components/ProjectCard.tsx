import {
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Link,
} from '@mui/material'
// import { StyledProps } from "../../commons/model";

export default function ProjectCard() {
  return (
    <>
      {/* project one */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item margin={'10px'}>
          <CardActionArea id="buddy" component="a" href="#">
            <Card sx={{ display: 'flex', flexwrap: 'wrap' }}>
              <CardContent
                sx={{ flex: 1, maxWidth: '350px', minHeight: '260px' }}
              >
                <Typography component="h2" variant="h5">
                  Buddy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  My final team project for my Devacademy course connecting
                  people new to Wellington with the locals. Using most of the
                  tech learnt over the course, plus Material UI.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  <Link>www.XXXXX.com</Link>
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Click to view the code in GitHub...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  objectFit: 'contain',
                  display: { xs: 'none', sm: 'block' },
                }}
                image="../images/international.png"
                alt="website homepage for buddy"
              />
            </Card>
          </CardActionArea>
        </Grid>
        {/* project two */}
        <Grid item margin={'10px'}>
          <CardActionArea id="buddy" component="a" href="#">
            <Card sx={{ display: 'flex', flexwrap: 'wrap' }}>
              <CardContent
                sx={{ flex: 1, maxWidth: '350px', minHeight: '260px' }}
              >
                <Typography component="h2" variant="h5">
                  Get out of Jail
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Feb - April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  This fun front end react game started to stretch my skill set
                  into character movements. Probably one of the funnest to
                  create at Devacademy course.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  <Link>www.XXXXX.com</Link>
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Click to view the code in GitHub...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  objectFit: 'contain',
                  display: { xs: 'none', sm: 'block' },
                }}
                image="../images/international.png"
                alt="website homepage for buddy"
              />
            </Card>
          </CardActionArea>
        </Grid>
        {/* project three */}
        <Grid item margin={'10px'}>
          <CardActionArea id="buddy" component="a" href="#">
            <Card sx={{ display: 'flex', flexwrap: 'wrap' }}>
              <CardContent
                sx={{ flex: 1, maxWidth: '350px', minHeight: '260px' }}
              >
                <Typography component="h2" variant="h5">
                  Lost and Found
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Feb - April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  This was my biggest team project from Devacademy. Working full
                  front end and back end teams.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  <Link>www.XXXXX.com</Link>
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Click to view the code in GitHub...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  objectFit: 'contain',
                  display: { xs: 'none', sm: 'block' },
                }}
                image="../images/international.png"
                alt="website homepage for buddy"
              />
            </Card>
          </CardActionArea>
        </Grid>
        {/* project four */}
        <Grid item margin={'10px'}>
          <CardActionArea id="buddy" component="a" href="#">
            <Card sx={{ display: 'flex', flexwrap: 'wrap' }}>
              <CardContent
                sx={{ flex: 1, maxWidth: '350px', minHeight: '260px' }}
              >
                <Typography component="h2" variant="h5">
                  Buddy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  April 2023
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  My final team project for my Devacademy course connecting
                  people new to Wellington with the locals. Using most of the
                  tech learnt over the course, plus Material UI.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  <Link>www.XXXXX.com</Link>
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Click to view the code in GitHub...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  objectFit: 'contain',
                  display: { xs: 'none', sm: 'block' },
                }}
                image="../images/international.png"
                alt="website homepage for buddy"
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
