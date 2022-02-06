import styled from "styled-components";

const HeaderSC = styled.header`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
grid-template-rows: 100px;
background-color: lightblue;

#Header-Left {
  background-color: pink;
}
#Header-Center {
  background-color: cyan;
}
#Header-Right {
  background-color: violet;
  .light-dark-mode-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min-content;
    background-color: black;
    border: 2px solid #c4c4c4;
    border-radius: 50%;
    padding: 2px;

    .light-mode-icon-wrapper {
      display: flex;
      svg {
        color: gold;
      }
    }
    .dark-mode-icon-wrapper {
      display: flex;
      svg {
        position: relative;
        left: 2px;
        color: white;
      }
    }
  }
}
`;

export { HeaderSC };