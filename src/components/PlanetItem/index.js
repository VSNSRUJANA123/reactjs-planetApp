// Write your code here
import './index.css'

const PlanetItem = props => {
  const {items} = props
  const {name, imageUrl, description} = items
  return (
    <div className="planetsContainer" data-testid="planets" key={name}>
      <h1 className="heading" key={name}>
        PLANETS
      </h1>
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p key={description}>{description}</p>
    </div>
  )
}
export default PlanetItem
