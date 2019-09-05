import styled from 'styled-components';

export const PopupWraper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`;
export const PopupInner = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 50%;
    transform: translateY(-50%);
    padding: 40px;
    margin: auto;
    background: white;
    border-radius: 4px;
    
    * {
        box-sizing: border-box;
    }

    .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close-icon {
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
                background-color: #D5D5D5;  
            }
    
            &:before {
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(-45deg);
            }
        }
    }
    .input-wrapper {
        position: relative;
        margin: 25px 0;
        padding: 15px;
        border: 1px solid #cccccc;
        border-radius: 5px;

        .input-f {
            width: 100%;
            padding: 0;
            border: none;
            font-size: 17px;
            outline: none;
        }
        .select-type {
            border: none;
            outline: none;
            width: 100%;
            position: relative;
            background: transparent
            -webkit-appearance: none;


            & option {
                position: absolute;
                top: 20px;
            }
        }
        .down-arrow-icon {
            display: inline-block;
            position: absolute;
            top: 50%;
            right: 25px;
            padding: 5px 5px 3px 3px;
            border: solid #7C51C2;
            border-width: 0 2px 2px 0;
            cursor: pointer;
            transform: rotate(45deg) translateY(-50%);        
        }
    }
`;
export const AddToListBtn = styled.div`
    position: relative;
    display: inline-block;
    padding: 15px 25px 15px 70px;
    background: #784CC0;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        background: #ffffff;
        height: 4px;
        border-radius: 10px;
    }
    &:before {
        width: 15px;
        top: 25px;
        left: 13px;
        transform: rotate(45deg);
    }
    &:after {
        width: 35px;
        transform: rotate(-45deg);
        top: 20px;
        left: 20px;
    }
`;