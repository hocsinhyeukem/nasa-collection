import styled from 'styled-components';

export const VideoWrap = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    background: #333333;
`;
export const VideoInner = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    padding: 0 40px;
    box-sizing: border-box;
    h1 {
        color: #CCCCCC;
    }
    .no-video {
        text-align: center;
        & ~ span {
            display: block;
            color: #CCCCCC;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
        }
    }
`;
export const HeaderVideoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span {
        position: relative;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        cursor: pointer;

        &:before, &:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #EAEAEA;  
        }

        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
    }
`;