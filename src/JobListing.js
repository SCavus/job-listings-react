import React from "react";

const JobListing = (props) => {

  return (
    <div className="job-container">
      <div className="job-listing">
        <div className="company-logo">
          <img src={props.jobListing.logo} alt="logo"></img>
        </div>
        <div className="job-details">
          <div className="job-details-company">
            <div className="job-company-name">{props.jobListing.company}</div>
            {props.jobListing.new && <div className="label-new">NEW!</div>}
            {props.jobListing.featured && (
              <div className="label-featured">FEATURED</div>
            )}
          </div>
          <div className="job-details-position">
            <h2>{props.jobListing.position} </h2>
          </div>
          <div className="job-details-misc">
            <div>{props.jobListing.postedAt}</div>
            <div>&bull;</div>
            <div>{props.jobListing.contract}</div>
            <div>&bull;</div>
            <div>{props.jobListing.location}</div>
          </div>
        </div>
      </div>
      <div className="languages">
      <div onClick={()=>props.addLanguage(props.jobListing.role)} className='lang' style={{cursor:'pointer'}}>{props.jobListing.role}</div>
      <div onClick={()=>props.addLanguage(props.jobListing.level)} className='lang' style={{cursor:'pointer'}}>{props.jobListing.level}</div>
        {props.jobListing.languages.map((lang, index) => {
          return <div key={index} onClick={(e) => props.addLanguage(lang)} className='lang' style={{cursor:'pointer'}}>{lang}</div>;
        })}
      </div>
    </div>
  );
};

export default JobListing;
