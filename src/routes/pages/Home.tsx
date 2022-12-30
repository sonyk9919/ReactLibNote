import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 5rem;
  padding-left: 5rem;
  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <h1>리액트의 다양한 라이브러리를 사용해보는 연습장입니다!</h1>
    </Wrapper>
  );
};

export default Home;
