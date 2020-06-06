import React from "react";

const CurrentFilter = (props) => {
  return (
    <div className={props.jobFilter.length > 0 ? 'current-filter' : null}>
      <div>
      {props.jobFilter.map((data, index) => (
        <span className='filtered-tag' key={index} style={{cursor:'pointer'}}>{data} <span  onClick={()=>props.removeTag(data)} className='delete-tag'>x</span></span>
      ))}
      </div>
      {props.jobFilter.length > 0 ? <div className='clear-button'><button className='filtered-tag' onClick={props.clearAll}>Clear</button></div> : null}
    </div>
  );
};

export default CurrentFilter;