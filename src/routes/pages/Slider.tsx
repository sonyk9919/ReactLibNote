import styled from "styled-components";
import HasManySliderContainer from "../../Container/hasManySliderContainer";
import SimpleSliderContainer from "../../Container/SimpleSliderContainer";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 5rem;
  padding-left: 10rem;
  h1 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .container {
    h2 {
      margin-bottom: 1rem;
      font-weight: 600;
    }
    margin-top: 2rem;
  }
`;

const Slider = () => {
  return (
    <Wrapper>
      <h1>여러가지 슬라이드를 구현했습니다.</h1>

      <div className="container">
        <h2>1. 단순 슬라이드</h2>
        <SimpleSliderContainer />
      </div>
      <div className="container">
        <h2>2. 여러 엘리먼트를 담은 슬라이드 Case 1</h2>
        <HasManySliderContainer />
      </div>
    </Wrapper>
  );
};

export default Slider;
