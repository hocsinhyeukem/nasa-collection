import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;

    span.back-icon {
        border: solid #7C51C2;
        border-width: 0 2px 2px 0;
        cursor: pointer;
        display: inline-block;
        padding: 5px 5px 3px 3px;
        transform: rotate(135deg);

    }
    a {
        text-decoration: none;
    }

    h1 {
        margin: 40px 0;
        font-size: 50px;
        color: #404040;
    }
    input {
        width: -webkit-fill-available;
        padding: 15px;
        height: 40px;
        font-size: 25px;
        &:focus {
            outline: none;
        }
    }
` 
export const ResultWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 50px;

    &> div {
        flex-basis: 30%;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    max-width: 30%;


    img {
        width: 100%;
        height: 230px;
        max-height: 230px;
        margin-bottom: 20px;
        cursor: pointer;
        box-shadow: 0px 8px 10px 3px #989C9D
    }

        .video-wrapper {
        position: relative;

        .player-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
        }
    }

    .info {
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
    }
    .desc {
        margin: 30px 0;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .actions {
        span {
            margin-right: 20px;
        }
    }
`
export const AddToList = styled.div`
    position: relative;
    padding: 15px 0;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    cursor: pointer;
    &:before, &:after {
        content: "";
        position: absolute;
        top: 50%;
        background: #CCCCCC;
        transform: translateY(-50%);
    }
    &:before {
        width: 2px;
        height: 25px;
        left: 21px;
    }
    &:after {
        width: 25px;
        height: 2px;
        left: 10px;
    }
`;