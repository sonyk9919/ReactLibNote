import SliderTwo from "../Components/Slider/two";
import image1 from "../Resource/Images/1.jpg";
import image2 from "../Resource/Images/2.jpg";
import image3 from "../Resource/Images/3.jpg";
import image4 from "../Resource/Images/4.jpg";
import image5 from "../Resource/Images/5.jpg";
import image6 from "../Resource/Images/6.jpg";
import image7 from "../Resource/Images/7.jpg";
import image8 from "../Resource/Images/8.jpg";
import image9 from "../Resource/Images/9.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const HasManySliderContainer = () => {
  return <SliderTwo images={images} />;
};

export default HasManySliderContainer;
