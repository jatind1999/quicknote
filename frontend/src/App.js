import GlobalStyle, { Container } from "./globalStyles";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { AddCardSkeleton, ZeroCardsText } from "./AppStyles";
import formatDate from "./utils/formatDate";

const App = () => {
    const [notes, setNotes] = useState([]);
    const [notesModified, setNotesModified] = useState(false);
    const fetchNotes = async () => {
        const res = await fetch(`${process.env.BACKEND_SERVER_URL}`);
        const data = await res.json();
        // sort notes based on their create date.
        data.rows.sort((a, b) => a.created_on - b.created_on);
        setNotes(data.rows);
    };
    useEffect(() => {
        fetchNotes();
    }, [notesModified]);

    const handleDelete = async (key) => {
        try {
            const options = {
                method: "DELETE",
            };
            const res = await fetch(
                `${process.env.BACKEND_SERVER_URL}/delete/${key}`,
                options
            );
            console.log(res);
            if (res.status === 200) setNotesModified(!notesModified);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAdd = async () => {
        const newNote = {
            title: "",
            content: "",
        };

        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(newNote),
            };
            const res = await fetch(
                `${process.env.BACKEND_SERVER_URL}/add`,
                options
            );
            if (res.status === 200) setNotesModified(!notesModified);
        } catch (error) {
            console.error(error);
        }
    };

    const Cards = notes.map((note) => {
        const { title, content, modified_on, id } = note;
        const time = formatDate(modified_on);
        return (
            <Card
                title={title}
                content={content}
                time={time}
                cardId={id}
                deleteCard={handleDelete}
                key={id}
                setNotesModified={setNotesModified}
                notesModified={notesModified}
            />
        );
    });
    const NoCardText = (
        <ZeroCardsText> No notes left! Please create more.</ZeroCardsText>
    );

    return (
        <>
            <GlobalStyle />
            <Navbar></Navbar>
            <Container>
                {Cards.length > 0 ? Cards : NoCardText}
                <AddCardSkeleton onClick={handleAdd} />
            </Container>
        </>
    );
};

export default App;
