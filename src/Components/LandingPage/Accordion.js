import { Icon } from '@iconify/react'
import React, { useMemo, useState } from 'react'
import moveDownRounded from '@iconify/icons-material-symbols/move-down-rounded';
import arrowForwardIos from '@iconify/icons-material-symbols/arrow-forward-ios';
import './Styles/Accordion.css'
import { AccordionData } from '../../Constants/DataArray';
import { Link } from 'react-router-dom';

const QuestionAnswer = ({ items }) => {
    const [open, setOpen] = useState(false)
    const { question, answerPara1, answerPara2 } = items

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className='question-container' onClick={handleOpen}>
                {question}
                <span>
                    <Icon icon={moveDownRounded} rotate={open ? 2 : 0} />
                </span>

            </div>
            {open &&
                <div className='answer-container' id='answer'>
                    {answerPara1}
                    {
                        answerPara2 &&
                        <>
                            <br />
                            <br />
                            {answerPara2}
                        </>
                    }
                </div>
            }
        </>
    )
}

const Accordion = () => {
    const Accordion = useMemo(() => AccordionData(), [])

    return (
        <div id='accordion'>
            <h1 className='title'>Frequently Asked Questions.</h1>
            <div className='accordion-container'>
                {
                    Accordion.map((items, index) => {

                        return (
                            <QuestionAnswer key={index} items={items} />
                        )
                    })
                }

            </div>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className='start-button'>
                <Link to="/movies" className='page-link'>
                    Get Started
                    <span><Icon icon={arrowForwardIos} /></span>
                </Link>
            </div>
        </div>
    )
}

export default Accordion