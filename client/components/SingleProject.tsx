import React from 'react'
import { Projects } from '../../commons/model'
import {
  Typography,
  Container,
  Box,
} from '@mui/material'

interface Props {
  projectProp: Projects
}

export default function SingleProject(props: Props) {
  const { name, price, mfg, inStock} = props.projectProp
  const id = Number(props.projectProps.id)

return (
  <>
    {Object.values(props.projectProp).map((value) => (
      <Container maxWidth="lg" key={value.id}>
        <Box>
          <Typography>
            {value.name}
          </Typography>
        </Box>
      </Container>
    ))}
  </>
);
}