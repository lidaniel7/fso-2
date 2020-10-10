import React from 'react';

const Form = ({ addPerson, handleCurrInput, handlePhoneInput}) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleCurrInput}/>
        </div>
        <div>
          number: <input onChange={handlePhoneInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
    )
}

export default Form