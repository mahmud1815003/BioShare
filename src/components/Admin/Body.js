import React, {useState} from 'react'
import Hospital from './Forms/Hospital';
import Institute from './Forms/Institute';

const Body = () => {
    const [hospital, setHospital] = useState(true);
    const [institute, setInstitute] = useState(false);

    const doc = () => {
        setHospital(true);
        setInstitute(false);
    }
    const staf = () => {
        setHospital(false);
        setInstitute(true);
    }
    return (
        <div className='w-[1000px] mx-auto'>
            <div className='w-[550px] mx-auto p-4 flex flex-row justify-around items-center mt-4 border-b-[1px] border-black'>
                <button className='px-6 py-4 bg-purple-500 rounded-md' onClick={doc}>Add Hospital</button>
                <button className='px-6 py-4 bg-purple-500 rounded-md' onClick={staf}>Affiliate Institue</button>
            </div>
            {hospital && <div>
                <Hospital />
            </div>
            }
            {institute && <div>
                <Institute />
            </div>

            }
        </div>
    )
}

export default Body