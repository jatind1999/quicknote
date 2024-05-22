import styled from "styled-components";
import { Button } from "../../globalStyles";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    height: 300px;
`;
export const CardHeader = styled.div.attrs({
    contentEditable: true,
    suppressContentEditableWarning: true,
    placeholder: "Untitled",
})`
    font-size: 20px;
    border: none;
    &:focus {
        outline: none;
    }
`;
export const CardContent = styled.div.attrs({
    contentEditable: true,
    suppressContentEditableWarning: true,
    placeholder: "Write your note here....",
})`
    height: 90%;
    overflow-y: scroll;
`;

export const CardFooter = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;
export const CardTimestamp = styled.span`
    font-size: 14px;
    font-weight: 100;
    &:before {
        content: "${(props) => props.time}";
    }
`;

export const DeleteButton = styled(Button)`
    color: #ff0000;
    background: #fdfdfd;
    &:before {
        content: "Delete";
    }
`;
