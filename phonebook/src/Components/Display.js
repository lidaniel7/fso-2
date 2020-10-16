import React from 'react'
import uniqid from "uniqid"

const Display = ({ persons, handleDeletePerson }) => {
    return (
        <div>
            {persons.map((person, i) => 
                <div key={uniqid()}>
                    <p key={uniqid()}>{person.name} {person.number}</p>
                    <button key={uniqid()} onClick={() => handleDeletePerson(person.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Display