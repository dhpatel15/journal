import styled from 'styled-components';

export default styled.button`
  color: #232C33;
  text-align: center;
  font-size: 16px;
  border-radius: 2px;
  height: 75%;
  width: 150%;
  padding: 0 2em;
  background: transparent;
  outline:  0.3px lightgrey;
  transition: 0.2s linear;

  &:hover{
    cursor: pointer;
    transform: translateY(-3px);
    background: #DA627D;
  }
`