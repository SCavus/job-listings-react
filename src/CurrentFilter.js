import React from "react";

const CurrentFilter = (props) => {
  return (
    <div className={props.jobFilter.length > 0 ? 'current-filter' : null}>
      {props.jobFilter.map((data, index) => (
        <span className='filtered-tag' onClick={()=>props.removeTag(data)} key={index} style={{cursor:'pointer'}}>{data} <span className='delete-tag'>X</span></span>
      ))}
    </div>
  );
};

export default CurrentFilter;