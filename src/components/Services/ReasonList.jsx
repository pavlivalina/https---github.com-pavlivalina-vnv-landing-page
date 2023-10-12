import React from 'react'
import './ReasonList.css';

const ReasonList = (props) => {
  return (
    <ul className='reasons'>
        {props.reasonList.map((reason) => 
            <li className='reason'>
            <img src={reason.icon} alt="" height='26px' width='26px' className='icon-desc'/>
            <p dangerouslySetInnerHTML={{ __html: reason.reason }}></p>
        </li>)}
      </ul>
  )
}

export default ReasonList