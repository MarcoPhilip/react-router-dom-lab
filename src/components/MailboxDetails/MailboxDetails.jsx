// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find(
        (mailbox) => (
            mailbox._id === Number(mailboxId)
    ));

    return (
        <>
            <h2>{selectedBox.name}</h2>
            <h3>Details</h3>
            <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>

        </>
    );
};

export default MailboxDetails;

