import React, {useState, useEffect} from 'react'
import { useAddReportMutation } from '../../redux/Patient/patientApi'

const ReportForm = () => {
    const [patient, setPatient] = useState('')
    const [doctor, setDoctor] = useState('')
    const [type, setType] = useState('CT')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null);
    const [addReport, { data: responseData, isLoading, isError, error, isSuccess }] = useAddReportMutation();
    useEffect(() => {
        console.log(error);
        console.log(responseData);
        if (!error && responseData){
            console.log("HELlo");
            clearForm();
        }
    }, [responseData, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addInstitute({
            patient,
            doctor,
            type,
            description,
            file,
        });
    }
    const clearForm = () => {
        setPatient("");
        setDoctor("");
        setDescription("");
        setFile(null);
    }
    return (
        <div className='bg-[#150050] w-[650px] mx-auto py-6 mt-6'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]'>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Add a Report</h1>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <div className='bg-[#150050]'>

                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' type='text' placeholder='Patient Email (Required)' value={patient} onChange={(e) => setPatient(e.target.value)} />
                        {error?.data?.patient && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.patient?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='text' placeholder='Doctor Email (Required)' value={doctor} onChange={(e) => setDoctor(e.target.value)} />
                        {error?.data?.doctor && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.doctor?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='file' placeholder='File' onChange={(e) => setFile(e.target.files[0])} />
                        {error?.data?.file && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.file?.msg}</p>}
                    </div>
                    <div className='my-2 flex flex-col bg-[#150050] text-white'>
                        <label className="bg-[#150050] text-md font-bold py-1 px-2">Select Hospital</label>
                        <select onChange={(e) => setType(e.target.value)} value={type} className='bg-[#150050] max-w-[250px] text-center text-lg rounded-md border-2 border-black' name="types">
                            <option className='bg-[#150050] text-white'  value="CT">CT</option>
                            <option className='bg-[#150050] text-white'  value="MRI">MRI</option>
                            <option className='bg-[#150050] text-white'  value="X-RAY">X-RAY</option>
                            <option className='bg-[#150050] text-white'  value="PET">PET</option>   
                        </select>
                    </div>
                    <div className='bg-[#150050]'>
                        <textarea className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='text' placeholder='Description of Report (Required)' value={designation} onChange={(e) => setDesignation(e.target.value)} />
                        {error?.data?.description && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.description?.msg}</p>}
                    </div>
                </div>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Confirm</button>
                {responseData?.message && <p className='bg-[#150050] text-white'>{responseData?.message}</p>}
                {error?.data?.message && <p className='bg-[#150050] text-white'>{error?.data?.message}</p>}
            </form>
        </div>
    )
}

export default ReportForm