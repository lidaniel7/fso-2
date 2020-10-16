import React, { useEffect, useState } from 'react'
import Form from './Components/Form.js'
import Display from './Components/Display.js'
import Notification from './Components/Notification.js'
import axios from 'axios'
import personService from './services/personService.js'
import uniqid from "uniqid";


const App = () => {

  useEffect(() => {
    personService
      .getPersons()
      .then(people => {
        console.log(people)
        setPersons(people)
      })
  }, [])

  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [message, setMessage] = useState(null)

  const handleCurrInput = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneInput = (event) => {
    setNumber(event.target.value)
  }

  const handleDeletePerson = (id) => {
    personService.deletePerson(id)
      .then(response => setPersons(persons.filter(person => person.id !== id)))
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService.addPerson(newPerson)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNumber('')
        setMessage(`${response.name} has been added to phone book`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Form addPerson={addPerson} handlePhoneInput={handlePhoneInput} handleCurrInput={handleCurrInput} />
      <h2>Numbers</h2>
      <Display persons={persons} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App