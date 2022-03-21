import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  font-style: italic;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <h1>hello Styled-compoents</h1>
      <h2>hello Styled-compoents</h2>
      <p>hello styled-components</p>
      <ul>
        <li>hello Styled-components</li>
      </ul>
      <a>hello Styled-components</a>
      <span>hello Styled-components</span>
    </Container>
  );
};

export default Home;
