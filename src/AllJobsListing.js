import React from "react";
import JobListing from "./JobListing";

const AllJobsListing = (props) => {
  return (
    <div className="all-jobs-container">
      {props.jobFilter.map((job, index) => {
        return (
          <JobListing
            key={index}
            addLanguage={props.addLanguage}
            jobListing={job}
          />
        );
      })}
    </div>
  );
};

export default AllJobsListing;
