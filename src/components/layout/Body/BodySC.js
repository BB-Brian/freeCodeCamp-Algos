import styled from "styled-components";

const BodySC = styled.div`
  display: grid;
  grid-template-columns: (auto-fill), 1fr);
  .left-panel {
    background-color: #1B1B32;
    width: 100%;
    height: 100vh;
  }
  .right-panel {
    background-color: #292A40;
    width: 100%;
  }
`;

export { BodySC };