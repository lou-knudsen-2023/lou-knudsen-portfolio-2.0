// import { useParams } from 'react-router'
import { Projects } from '../../commons/model'

interface Props {
  projectProp: Projects
}

export default function SingleProject(props: Props) {
  const { name, price, mfg, inStock, id } = props.projectProp

  return (
    <div className="widget-container">
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>Manufacturer: {mfg}</p>
      <p>Items in stock: {inStock}</p>
      <p>Product ID: {id}</p>
    </div>
  )
}
