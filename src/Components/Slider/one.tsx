import { motion, Variants, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { SliderLeftBtn, SliderRightBtn } from "../Button/Btn";
import { AiOutlineVerticalLeft } from "react-icons/ai";
import { useState, useRef } from "react";

interface IProps {
  images: string[];
}

const Wrapper = styled.div`
  position: relative;
  width: 720px;
  height: 480px;
`;

interface ISliderImg {
  imgurl: string;
}

const SliderImage = styled(motion.div)<ISliderImg>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imgurl});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 5;
`;

interface ICustom {
  inverse: Boolean;
}

const SliderVar: Variants = {
  inner: ({ inverse }: ICustom) => ({ x: inverse ? -1000 : 1000, opacity: 0 }),
  stop: {
    x: 0,
    opacity: 1,
    zIndex: 5,
    transition: { duration: 0.5, bounce: 0 },
  },
  outter: ({ inverse }: ICustom) => ({
    x: inverse ? 1000 : -1000,
    opacity: 0,
    transition: { duration: 0.5, bounce: 0 },
  }),
};

const SliderOne = ({ images }: IProps) => {
  const [id, setId] = useState<number>(0);
  const [inverse, setInverse] = useState<boolean>(false);
  const changeId = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    if (name === "Left") {
      setInverse((prev) => true);
      setId((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setInverse((prev) => false);
      setId((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };
  return (
    <Wrapper>
      <SliderLeftBtn changeId={changeId} />
      <AnimatePresence custom={{ inverse }}>
        <SliderImage
          imgurl={images[id]}
          key={id}
          variants={SliderVar}
          initial="inner"
          animate="stop"
          exit="outter"
          custom={{ inverse }}
        ></SliderImage>
      </AnimatePresence>
      <SliderRightBtn changeId={changeId} />
    </Wrapper>
  );
};

export default SliderOne;
