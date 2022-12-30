import styled from "styled-components";
import { AiOutlineVerticalLeft } from "react-icons/ai";

const Left = styled(AiOutlineVerticalLeft)`
  position: absolute;
  transform: rotateZ(180deg);
  cursor: pointer;
  color: white;
  width: 50px;
  left: 0;
`;

const Right = styled(AiOutlineVerticalLeft)`
  position: absolute;
  cursor: pointer;
  color: white;
  width: 50px;
  right: 0;
`;

const SliderBtn = styled.button`
  position: absolute;
  z-index: 30;
  height: 100%;
  width: 2rem;
  font-size: 3rem;
  outline: none;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${Left} {
      color: #b400fc;
    }
    ${Right} {
      color: #b400fc;
    }
  }
`;

interface IProps {
  changeId: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SliderLeftBtn = ({ changeId }: IProps) => {
  return (
    <SliderBtn title="이전" name="Left" onClick={changeId} style={{ left: 0 }}>
      <Left />
    </SliderBtn>
  );
};

export const SliderRightBtn = ({ changeId }: IProps) => {
  return (
    <SliderBtn
      title="다음"
      name="Right"
      onClick={changeId}
      style={{ right: 0 }}
    >
      <Right />
    </SliderBtn>
  );
};
