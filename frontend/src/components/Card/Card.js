import { useState } from "react";
import {
    CardContainer,
    CardContent,
    CardHeader,
    CardTimestamp,
    CardFooter,
    DeleteButton,
} from "./CardStyles";

const Card = ({
    title,
    time,
    content,
    cardId,
    deleteCard,
    notesModified,
    setNotesModified,
}) => {
    let lastTimer = null;
    let cardTitle = title;
    let cardContent = content;
    const updateNote = () => {
        debounce();
    };
    const handleTitleChange = (updatedTitle) => {
        cardTitle = updatedTitle;
        updateNote();
    };

    const handleContentChange = (updatedContent) => {
        cardContent = updatedContent;
        updateNote();
    };
    const debounce = (delay = 3000) => {
        clearTimeout(lastTimer);
        lastTimer = setTimeout(async () => {
            // make api call to save the data.
            console.log("Update API call made.");
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({
                    newTitle: cardTitle,
                    newContent: cardContent,
                }),
            };

            try {
                const res = await fetch(
                    `${process.env.BACKEND_SERVER_URL}/update/${cardId}`,
                    options
                );
                console.log(res);
                if (res.status === 200) setNotesModified(!notesModified);
            } catch (error) {
                console.error(error);
            }
        }, delay);
    };
    return (
        <>
            <CardContainer>
                <CardHeader
                    onInput={(e) => handleTitleChange(e.target.innerText)}
                >
                    {title}
                </CardHeader>
                <CardContent
                    onInput={(e) => handleContentChange(e.target.innerText)}
                >
                    {content}
                </CardContent>
                <CardFooter>
                    <CardTimestamp time={time} />
                    <DeleteButton onClick={() => deleteCard(cardId)} />
                </CardFooter>
            </CardContainer>
        </>
    );
};
export default Card;
