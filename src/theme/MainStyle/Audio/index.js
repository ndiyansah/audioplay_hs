import styled from "styled-components";

export const Bar = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;

  .barTime {
    color: white;
    font-size: 16px;
  }

  .barProgress {
    flex: 1;
    border-radius: 5px;
    margin: 0 20px;
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .barProgressKnob {
      position: relative;
      height: 16px;
      width: 16px;
      border: 1.5px solid white;
      border-radius: 50%;
      background-color: #1dd760;
    }
  }
`;


export const PlayButton = styled.button`
  width: fit-content;
  margin-bottom: 15px;
  background-color: transparent;
  border: none;
`;
