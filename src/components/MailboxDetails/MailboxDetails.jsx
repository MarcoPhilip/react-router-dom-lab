// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from "react-router";

const MailboxDetails = ({mailboxes, letters}) => {

    const { mailboxId } = useParams();

    const selectedBox = mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    const selectedLetters = letters.filter((letter) => (
        letter.mailboxId === Number(mailboxId)
    ));

    return (
        <main>
            <h2>{selectedBox.name}</h2>
            <h3>Details</h3>
            <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>

            <h3>Letters:</h3>
            {selectedLetters.length ? (
                selectedLetters.map((letter, i) => (
                    <div key={i}>
                        <p>To: {letter.recipient}</p>
                        <p>{letter.message}</p>
                    </div>
                ))
            ) : (
                <h4>No letters yet.</h4>
            )}
        </main>
    );
};

export default MailboxDetails;

