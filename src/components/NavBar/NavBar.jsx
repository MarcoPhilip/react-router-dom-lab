
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <link to='/mailboxes'>Mailboxes</link>
                </li>
                <li>
                    <Link to='new-mailbox'>New Mailbox</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;