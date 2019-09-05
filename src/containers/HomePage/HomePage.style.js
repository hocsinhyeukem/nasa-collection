import styled from 'styled-components'


export const Container = styled.div`
    padding: 0 40px;
` 

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h1 {
        font-size: 50px;
        color: #B2B2B2;
    }
    a {
        text-decoration: none;
        color: #ffffff;
    }
`
export const AddNewBtn = styled.span`
    position: relative;
    padding: 15px 15px 15px 40px;
    background: #784CC0;
    border-radius: 5px;
    &:before {
        content: "";
        width: 2px;
        height: 25px;
        position: absolute;
        left: 21px;
        top: 50%;
        background: white;
        transform: translateY(-50%);
    }
    &:after {
        content: "";
        width: 25px;
        height: 2px;
        position: absolute;
        left: 10px;
        top: 50%;
        background: white;
        transform: translateY(-50%);
    }
`

export const CollectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
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
    .preview-img {
        width: 100%;
        height: 230px;
        max-height: 230px;
        margin-bottom: 20px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0px 8px 10px 3px #989C9D
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
export const FotterWrap = styled.div`
    display: flex;

    span {
        padding: 15px;
        margin-right: 20px;
        border:1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }

    .icon {
        width: 15px;
        height: 15px;
    }
`;