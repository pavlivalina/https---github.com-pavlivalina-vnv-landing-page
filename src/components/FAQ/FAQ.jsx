import React from 'react'
import './FAQ.css';

const FAQ = () => {
  return (
   <div id='faq-section'>
      <div className='faq-title'>
          <h1>FAQ</h1>  
       </div>

      <div class="faq-content">
        <div class="faq-question">
          <input id="q1" type="checkbox" class="panel"/>
          <div class="plus">+</div>
          <label for="q1" class="panel-title">Can I get a refund after payment?</label>
          <div class="panel-content">Yes, you can. How it works: in any case, 5% of the refund amount and the bank's commission are deducted. Refunds are made only for those stages of the project that have not been started. All work that has been completed and paid for is sent to the customer. Stages that have been started are always completed (at the request of the customer).</div>
        </div>
        
        <div class="faq-question">
          <input id="q2" type="checkbox" class="panel"/>
          <div class="plus">+</div>
          <label for="q2" class="panel-title">How is the payment made?</label>
          <div class="panel-content">There are two payment options: a full subscription and a phased subscription.<br/>A full prepayment involves transferring the entire amount for the project at the beginning of cooperation.<br/>A phased subscription involves payment in installments for each stage (or several).<br/>Each payment transaction is accompanied by an invoice (check) with information about the paid service or stage.</div>
        </div>
        
        <div class="faq-question">
          <input id="q3" type="checkbox" class="panel"/>
          <div class="plus">+</div>
          <label for="q3" class="panel-title">Can I choose only one stage and not the entire service?</label>
          <div class="panel-content">No, you can only order a full-fledged service.</div>
        </div>
      </div>
</div>
  )
}

export default FAQ