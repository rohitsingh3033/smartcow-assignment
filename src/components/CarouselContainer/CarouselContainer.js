import Carousel from '../Carousel/Carousel';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import TextOnCarousel from '../TextOnCarousel/TextOnCarousel';
import TopBar from '../TopBar/topbar';

function CarouselContainer() {

  return (
    <div className="s-carousel">
      <TopBar />
      <Carousel />
      <TextOnCarousel />
      <YoutubeVideo />
    </div>
  );
}

export default CarouselContainer;