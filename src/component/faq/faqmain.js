import React from 'react'

export default function faqmain( { faq, index, toggleFAQ } ) {
  return (
    <div 
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}>
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  )
}
