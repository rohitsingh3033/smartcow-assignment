import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Carousel.css';

// Image import
import firstImage from '../../static/images/1.jpg';
import secondImage from '../../static/images/2.jpg';
import thirdImage from '../../static/images/3.jpg';
import fourthImage from '../../static/images/4.jpg';

const mapImagesToDivs = arr => {
  const ret = arr.map((el, index) => {
    return (
      <img src={el} alt={index} key={index}></img>
    )
  });

  return ret;
}


function Carousel() {

  const images = [firstImage, secondImage, thirdImage, fourthImage];
  const carouselCells = mapImagesToDivs(images);

  useEffect(() => {
    const elem = document.querySelector('.mainCarousel');
    new Flickity(elem, {
      cellAlign: 'left',
      autoPlay: true,
      contain: true,
      pageDots: false
    });
  }, []);

  return (
    <div className="mainCarousel">
      {carouselCells}
    </div>
  );
}

export default Carousel;