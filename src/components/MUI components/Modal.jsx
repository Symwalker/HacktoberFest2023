import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import Modal from '@mui/material/Modal';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import {BiSolidMessageAdd} from "react-icons/bi"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    // width: 70%,
    bgcolor: '#e0e5d3',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,


};
const Modall = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [open, setOpen] = React.useState(false);
    // const [refresh, setrefresh] = useState(false);
    // const [data , setdata] = useState({})
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
    };
    const addReview = async (obj) =>{
        try{
          const res =  await axios.post("http://localhost:8080/api/addreview", obj)
console.log(res);

if(res.status === 201){
    handleClose();  
}
        }catch(err){
            console.log("Error in calling addUser api" , err);
        }
    }

    const relod = ()=>{
        window.location.reload()
       }   
    return (
        <>
            <div>
                {/* <Button onClick={handleOpen} className>Open modal</Button> */}
                {/* <Button variant='contained' >Add a review</Button> */}
                <button onClick={() => { handleOpen() }} className='btnn fixed z-10 top-36 gap-1 right-10 flex items-center p-2 border text-white' style={{fontSize:"20px"}}><BiSolidMessageAdd style={{marginTop:"5px"}}/> YOURS</button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} width={{xs:'90%', sm:"80%", md:"50%"}}>
                        <form className="space-y-6" onSubmit={handleSubmit(addReview)}>
                            <div className="mt-1">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                   Enter Email address
                                </label>
                                <input
                                    id="email"
                                    {...register('email', { required: "email is required", pattern: { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "email is not valid" } })}
                                    type="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                            </div>
                            <div className="mt-1">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                  Enter Name
                                </label>
                                <input
                                    id="name"
                                    name='name'
                                    {...register('name')}
                                    required
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Enter your views
                                </label>
                                <textarea name='message' required rows={"5"} {...register('message')} className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />

                            </div>


                            <div>
                                <button
                                    onClick={relod}
                                    type="submit"
                                    className="flex w-1/3 ms-auto justify-center rounded-md btnn px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
                        {/* <InputFir mt={1} name="title" label={"Title"} onChange={(e)=>onchanger(e)}/>
          <InputFir mt={2} name="caption" label={"Caption"} onChange={(e)=>onchanger(e)}/>
          <InputFir mt={2} name="tags" label={"Tags"} onChange={(e)=>onchanger(e)}/> */}


                        {/* <ButonCmp onClick={()=>{userAdd() ; handleClose(); relod()}} text={"Post"}/> */}


                        {/* <InputFir mt={1} label={""}/> */}
                    </Box>
                </Modal>

            </div>
        </>
    )
}

export default Modall

