import styled from 'styled-components';

export default styled.div`
  background-color: #FFFFFF;
  display: flex;
  height: 100vh;

  & > div {
    padding: 0.5% 2%;
  }
  
  @media (max-width: 1100px) {
    display: block;
  } 
`
