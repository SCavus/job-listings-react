import React, { useState } from 'react'

    // This finishing work will involve maintaining a state variable to track which tags have been selected, 
    // and using these tags to filter the list of selected jobs.

const SelectLanguage = (props) => {
    const [lang, setLang] = useState([])
    
    return (
    <button className='filter-button'>{props.language}</button>
    )
}

export default FilterButton