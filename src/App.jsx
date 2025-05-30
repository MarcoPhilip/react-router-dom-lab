import { useState } from 'react';
import './App.css';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes } from 'react-router';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';

const App = () => {
  // Create a new useState variable called mailboxes. Set its initial state to an empty array ([]).
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  // Build the scaffolding for a function called addBox. It should accept form data for a new mailbox and setMailboxes state accordingly.
  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  const addLetter = (newLetterData) => {
    newLetterData.mailboxId = Number(newLetterData.mailboxId);
    setLetters([...letters, newLetterData]);
  }


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />

        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} /> } />

        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />
        } />

        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />
        } />

        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />

        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />

      </Routes>
    </>
  );
};

export default App;
