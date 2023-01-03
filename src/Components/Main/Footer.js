import React, { useMemo } from 'react'
import { FooterLinks } from '../../Constants/DataArray'
import LanguageSwitcher from './LanguageSwitcher'
import './Styles/Footer.css'

const Footer = () => {
    const LinkNames = useMemo(() => FooterLinks(), [])

    return (
        <div id='footer'>
            <div className='footer-container'>
                <h4 className='footer-header'>Questions? Call <span>000-800-919-1694</span></h4>
                <div className='link-box'>
                    <ul>
                        {LinkNames.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a className='footer-links' href=''>{link.linkname}</a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
                <LanguageSwitcher/>
                <p className='footer-text'>Netflix India</p>
            </div>
        </div>
    )
}

export default Footer