import React, { useState } from 'react'
import Form from './Components/Form.js'
import Display from './Components/Display.js'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')

  const handleCurrInput = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneInput = (event) => {
    setNumber(event.target.value)
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
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} handlePhoneInput={handlePhoneInput} handleCurrInput={handleCurrInput}/>
      <h2>Numbers</h2>
      <Display persons={persons}/>
    </div>
  )
}

export default App