import './index.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(items => (
          <PlanetItem items={items} key={items.name} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
// import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import './index.css'

// const PlanetsSlider = () => {
//   const settings = {
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//       </Slider>
//     </div>
//   )
// }

// export default PlanetsSlider
