import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 16px 0 10px 0;
  margin: 0 16px 0;

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2px;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2px;
  align-items: center;
`
