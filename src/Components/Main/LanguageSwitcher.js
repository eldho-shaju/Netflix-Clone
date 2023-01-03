import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import arrowDropDown from '@iconify/icons-material-symbols/arrow-drop-down';
import flagCircleRounded from '@iconify/icons-material-symbols/flag-circle-rounded';
import './Styles/LanguageSwitcher.css';

const LanguageSwitcher = ({style}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='language-selector' style={style}>
            <div className='language-button' onClick={handleClick}>
                <Icon className='icon' icon={flagCircleRounded} />
                <p>English</p>
                <Icon className='icon' icon={arrowDropDown} rotate={open ? '180deg' : ''}/>
            </div>
            {open ? <div className='drop-down'>
                <ul>
                    <li>English</li>
                    <li>हिंदी</li>
                </ul>
            </div> : ''}
        </div>
    )
}

export default LanguageSwitcher