import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailbocDetails from './components/MailboxDetails/MailboxDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Hello world!</h1>
  )
}

export default App
