import React from 'react'

const HalfParagraph = (props) => {
  return (
    <div className="halfParagraph">
        <p className="halfParagraphTitle">
            {props.title}
        </p>
        <div className="halfParagraphText">
            {props.text.map((text, index) => {
                return (
                    <p key={index}>
                        {text}
                        <br></br>
                    </p>
                )
            })}
        </div>
    </div>
  )
}

export default HalfParagraph