import styled from 'styled-components';

export const MainWrapper = styled.div`
    background-color: white;
    position: relative;
    top: 60px;
    max-width: 480px;
    width: 100%;
    margin: 0px auto;
    padding: 0px 16px 80px;
    box-sizing: border-box;
    min-height: calc(100vh - 60px);
`

export const Header = styled.div`
    background: rgb(24, 24, 24);
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 11;
`