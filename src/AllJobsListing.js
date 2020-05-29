import React from "react";
import JobListing from './JobListing'
import jobsData from './data.json'

const AllJobsListing = () => {
return (
    <div className='all-jobs-container'>
        {jobsData.map((job)=> {
            return (
                <JobListing jobListing={job}/>
            )
        })}
    </div>
)
}

export default AllJobsListing;
