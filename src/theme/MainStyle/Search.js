import styled from "styled-components";
export const Wrapper = styled.div`
  /* display: flex;
  width: 100%;
  background: #fff;
  border: 1px solid #000;
  align-items: center;
  border-radius: 4px;
  padding-left: 12px;
  box-sizing: border-box;
  z-index: 100; */
  background: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border: none;
  color: rgb(24, 24, 24);
  padding: 0px 15px;
  font-size: 12px;
  height: 36px;
  width: 100%;
  border-radius: 20px;
  margin-right: 15px;
`;

export const SearchInputStyled = styled.input`
  /* width: 100%;
  padding: 12px 12px 12px 0;
  margin-left: 4px;
  border: 0px;
  border-radius: 4px;
   */
  background: rgb(255, 255, 255);
  display: flex;
  font-family: Nunito;
  font-size: 14px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border: none;
  color: rgb(24, 24, 24);
  padding: 0px 15px;
  font-size: 12px;
  height: 36px;
  width: 100%;
  border-radius: 20px;
  margin-right: 15px;

  &::placeholder {
    color: #b3b3b3;
  }

  outline: none;
`;

export const SearchBarWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  height: 60px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px auto;
`;
