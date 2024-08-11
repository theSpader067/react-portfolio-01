import { useState } from "react"
import { Toaster } from "react-hot-toast"
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast"
import { motion } from "framer-motion"
const ContactForm = () => {

    const [FormData, setformData] = useState({
        name:'',
        email:'',
        message:'',
    })
    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
        }
        else{
            setErrors({});
            setIsSending(true);
            emailjs.send("service_ul4njpm","template_w1h5mgo",FormData,"9VcI8kZp2mcxSd2SJ").then((response)=>{
                console.log("SUCCESS",response.status,response.text)
                toast.success('Message sent successfully')
                setformData({
                    name:'',
                    email:'',
                    message:'',
                });

            }).catch((error)=>{
                console.log("ERROR! ",error)
                toast.error('Failed to send message. Please try again.')
            }).finally(()=>{
                setIsSending(false);
            })
        }
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setformData({
            ...FormData,
            [name]:value,
        })
    }

    const validate = ()=>{
        let errors = {};
        if(!FormData.name) errors.name = "Name is required";
        if(!FormData.email) errors.email = "Email is required";
        if(FormData.email){
            if(!/\S+@\S+\.\S+/.test(FormData.email)){
                errors.email = "Invalid Email"
            }
        }
        if(!FormData.message) errors.message = "Message is required";

        return errors
    }
  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
        <Toaster/>
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
            Let's connect
        </h2>
        <motion.form
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8,delay:1}}
        onSubmit={handleSubmit}>
            <div className="mb-4">
                <input type="text" id="name" name="name" value={FormData.name} placeholder="Name"
                onChange={handleChange} className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                {errors.name &&(
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} aria-live="polite" className="text-sm text-pink-700">{errors.name}</motion.p>
                )}
            </div>
            <div className="mb-4">
                <input type="email" id="email" name="email" value={FormData.email} placeholder="Email"
                onChange={handleChange} className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                {errors.email &&(
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} aria-live="polite" className="text-sm text-pink-700">{errors.email}</motion.p>
                )}
            </div>
            <div className="mb-4">
                <textarea id="message" name="message" value={FormData.message} placeholder="Message"
                // appearance-none to remove default browser styling (especially useful for for elements)
                onChange={handleChange} className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                 rows="4"/>
                {errors.message &&(
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} aria-live="polite" className="text-sm text-pink-700">{errors.message}</motion.p>
                )}
            </div>
            <button type="submit" className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500
                ${isSending?"cursor-not-allowed opacity-50":""}`} disabled={isSending}>
                    {isSending?"Sending..":"Send"}
            </button>
        </motion.form>
    </div>
  )
}

export default ContactForm
