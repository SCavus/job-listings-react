import React, {useState} from "react";
import "./App.css";
import AllJobsListing from "./AllJobsListing";
import data from "./data.json";
import CurrentFilter from "./CurrentFilter";


function App() {
  const [jobFilter, setJobFilter] = useState([]);
  
  const addLanguage = (tag) => {
    if (!jobFilter.includes(tag)) {
      setJobFilter([...jobFilter, tag]);
    }
  };

  const filteredJobs = () => {
    return data.filter((jobs) =>
      (jobFilter.every((el) => jobs.languages.includes(el) || jobs.role.includes(el) || jobs.level.includes(el))
    ))
  }

  const removeTag = (el) => {
    setJobFilter(jobFilter.filter(item=>item !== el))
  }

  const clearAllTags = () => {
    setJobFilter([])
  }

  return (
    <div className='App'>
      <header className="header"></header>
      <CurrentFilter jobFilter={jobFilter} removeTag={removeTag} clearAll={clearAllTags}/>
      <AllJobsListing jobFilter={filteredJobs()} addLanguage={addLanguage} />  
    </div>
  )
}

export default App
