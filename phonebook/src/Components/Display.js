import React from 'react'

const Display = ({ persons, handleDeletePerson }) => {
    return (
        <div>
            {persons.map((person, i) => 
                <div>
                    <p key={i}>{person.name} {person.number}</p>
                    <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Display