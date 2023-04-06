import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const Donation = (props) => {
    const donationTypes = {
        "In Person": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
        "By Phone": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", "Phone: +91 123123123"],
        "Online": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "]
    }
    
    return (<div style={{ transition: 'all 0.3s' }} className={props.open?"donation":"donation donation-closed"}>

        <div className="donation-container">

            <CloseIcon className='donation-close' onClick={()=>props.setOpen(false)} />
            <h2>
                Want to Show Your Support?
            </h2>
            <h3>
                Make a Donation
            </h3>
            <div className='donation-types'>
                {Object.keys(donationTypes).map((type, index) => {
                    return <div className='donation-types-each' key={index}>
                        <h4>{type}</h4>

                        {donationTypes[type].map((a, index) => {
                            return (<p key={index}>
                                {a}
                            </p>)
                        })}
                        {type === "Online" ? <button>Donate</button> : null}
                    </div>
                })
                }
            </div>
        </div>
    </div>)
}

export default Donation