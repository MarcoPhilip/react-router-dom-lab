import { Link } from "react-router";


const MailboxList = (props) => {

    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((currentMailbox) => (
                    <Link to={`/mailboxes/${currentMailbox._id}`} key={currentMailbox._id}>
                        <li className="mail-box">Mailbox {currentMailbox._id}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;