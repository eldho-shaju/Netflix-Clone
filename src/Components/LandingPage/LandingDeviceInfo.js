import React, { useMemo } from 'react'
import { DeviceList } from '../../Constants/DataArray'
import './Styles/LandingDeviceInfo.css'

const LandingDeviceInfo = () => {
    const DeviceData = useMemo(() => DeviceList(), [])

    return (
        <>
            {DeviceData.map((item, index) => {
                const { title, subtitle, image, video, classname, id } = item
                return (
                    <div id='device-info' key={index}>
                        <div className='grid-container' id={id}>
                            <div className='grid-content'>
                                <h1>{title}</h1>
                                <h4>{subtitle}</h4>
                            </div>
                            <div className='grid-img'>
                                <img className='device-img' src={image} alt={id}/>
                                {video && classname ?
                                    <div className='iframe-box'>
                                        <video autoPlay playsInline muted loop className={classname} src={video} />
                                    </div>
                                    : ''}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default LandingDeviceInfo