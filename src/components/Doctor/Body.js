import React, { useState } from 'react'
import Appointment from './Appointment';
import Reports from './Reports';

const Body = () => {
    const [app, setApp] = useState(true);
    const [report, setReport] = useState(false);

    const appointment = () => {
        setApp(true);
        setReport(false);
    }

    const reportList = () => {
        setApp(false);
        setReport(true);
    }
    return (
        <div className='bg-[#5cdb95]'>
            <div className='w-full bg-[#5cdb95]  grid grid-cols-2 text-center border-t-[1px] border-black cursor-pointer'>

                <div onClick={() => appointment()} className={app ? `bg-[#FF1D58] text-xl py-4 font-bold` : 'bg-[#c7073a] text-xl py-4 font-bold'}>
                    {`Today's Appointment`}
                </div>

                <div onClick={() => reportList()} className={report ? `bg-[#FF1D58] text-xl py-4 font-bold` : 'bg-[#c7073a] text-xl py-4 font-bold'}>
                    {`See Reports`}
                </div>
            </div>
            {app && <div>
                <Appointment />
            </div>}
            {report && <div>
                <Reports />
            </div>}
        </div>
    )
}

export default Body