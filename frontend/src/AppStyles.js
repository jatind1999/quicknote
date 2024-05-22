import styled from "styled-components";
import { CardContainer } from "./components/Card/CardStyles";

export const ZeroCardsText = styled.h1`
    font-size: 22px;
    font-weight: 400;
    margin: auto;
`;

export const AddCardSkeleton = styled(CardContainer)`
    border: 3px dashed #ccc;
    cursor: pointer;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
    &:before {
        content: "Click to add a new note.";
    }
`;
