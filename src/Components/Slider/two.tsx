import styled from "styled-components";
import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { SliderLeftBtn, SliderRightBtn } from "../Button/Btn";

interface IProps {
  images: string[];
}

interface ISliderImg {
  imgurl: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 1070px;
  height: 260px;
`;

const SliderImages = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  background-color: #969696;
  grid-column: 1;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

const SliderElement = styled(motion.div)<ISliderImg>`
  background-image: url(${(props) => props.imgurl});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const offset = 4;
interface ICustom {
  inverse: Boolean;
}
const SliderVar: Variants = {
  inner: ({ inverse }: ICustom) => ({
    x: inverse ? -1070 - 10 : 1070 + 10,
    opacity: 0,
  }),
  stop: { x: 0, opacity: 1, transition: { bounce: 0, duration: 0.5 } },
  outter: ({ inverse }: ICustom) => ({
    x: inverse ? 1070 + 10 : -1070 - 10,
    opacity: 0,
    transition: { bounce: 0, duration: 0.5 },
  }),
};

const ElementVar: Variants = {
  hover: { scale: 1.3, transition: { bounce: 3, delay: 0.2 } },
};

const SliderTwo = ({ images }: IProps) => {
  const [id, setId] = useState<number>(0);
  const [inverse, setInverse] = useState<boolean>(false);
  const lastPage = useRef<number>(Math.ceil(images.length / offset));
  const changeId = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    if (name === "Left") {
      setInverse((prev) => true);
      setId((prev) => (prev === 0 ? lastPage.current - 1 : prev - 1));
    } else {
      setInverse((prev) => false);
      setId((prev) => (prev === lastPage.current - 1 ? 0 : prev + 1));
    }
  };
  const getElement = () => {
    const Element: JSX.Element[] = [];
    const page = offset * id;
    for (let i = page; i < page + offset; i++) {
      Element.push(
        <SliderElement
          key={i}
          variants={ElementVar}
          whileHover="hover"
          style={{
            transformOrigin:
              i === page
                ? "bottom left"
                : i === page + offset - 1
                ? "bottom right"
                : "bottom center",
          }}
          imgurl={images[i]}
        />
      );
    }
    return Element;
  };

  return (
    <Wrapper>
      <SliderLeftBtn changeId={changeId} />
      <AnimatePresence custom={{ inverse }}>
        <SliderImages
          variants={SliderVar}
          initial="inner"
          animate="stop"
          exit="outter"
          key={id}
          custom={{ inverse }}
        >
          {getElement()}
        </SliderImages>
      </AnimatePresence>
      <SliderRightBtn changeId={changeId} />
    </Wrapper>
  );
};

export default SliderTwo;
