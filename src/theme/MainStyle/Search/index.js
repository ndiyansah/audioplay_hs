import styled from "styled-components";
export const Wrapper = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border: none;
  color: rgb(0, 0, 0);
  padding: 0px 15px;
  font-size: 12px;
  height: 36px;
  width: 100%;
  border-radius: 20px;
  margin-right: 15px;
`;

export const SearchInputStyled = styled.input`
  background: rgb(255, 255, 255);
  display: flex;
  font-family: Nunito;
  font-size: 14px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border: none;
  color: rgb(0, 0, 0);
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
