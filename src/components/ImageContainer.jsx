import styled from "styled-components";

export default styled.div`
  display: flex;
  transform: translateX(${props => props.theme ? `${props.theme}px` : 0 });
  transition: transform 0.5s ease-in-out;
`