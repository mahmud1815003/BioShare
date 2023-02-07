import React, {useState} from 'react'

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
            <div className='w-full bg-[#5cdb95]  grid grid-cols-1 text-center border-t-[1px] border-black cursor-pointer'>

                <div onClick={() => appointment()} className={app ? `bg-[#FF1D58] text-xl py-4 font-bold` : 'bg-[#c7073a] text-xl py-4 font-bold'}>
                    {`Add Report`}
                </div>
            </div>
            {app && <div>
                
            </div>}
            {report && <div>
                
            </div>}
        </div>
    )
}

export default Body