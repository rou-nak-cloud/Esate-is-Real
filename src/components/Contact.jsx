import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong while sending message")
      setResult("");
    }
  };

  return (
      <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>
      <h1 className='text-2xl sm:4xl font-bold mb-2 text-center text-gray-700'>
        Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With us</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a Move? Let's Talk! together</p>

        <form action="#"
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto text-gray-900 pt-6 bg-white shadow-xs rounded px-6 pb-2 md:px-12'
        >
            <div className='flex flex-wrap max-sm:gap-4'>
                <div className='w-full md:w-1/2 text-left'>
                    <h2 className='text-lg font-mono text-blue-900/90'>Your Name</h2>
                    <input type="text" placeholder='Name here' name="Name" required 
                    className='w-full border border-gray-400 rounded py-3 px-3 mt-2'
                    />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    <h2 className='text-lg font-mono text-blue-900/90'>Your Email</h2>
                    <input type="email" placeholder='Email here' name="Email" required 
                    className='w-full border border-gray-400 rounded py-3 px-3 mt-2'
                    />
                </div>
            </div>
            <div className='max-sm:mt-3 my-6 text-left'>
                <h2 className='text-lg font-mono text-blue-900/90'>Message</h2>
                <textarea name="Message" id="#" placeholder='messages...'
                className='w-full border border-gray-600 rounded py-3 px-4 mt-2 h-48 resize-none'
                ></textarea>
            </div>
            <div className='md:flex md:items-center md:justify-center'>
            <button className='bg-blue-600 text-white font-semibold py-3 px-10 rounded-md w-full md:w-1/2 hover:bg-blue-600/80 hover:rounded-xl transition-all duration-300 ease-in-out cursor-pointer'>
                <h2 className='text-lg italic tracking-wide hover:tracking-widest transition-all duration-500 ease-in-out'>
                    {result ? result : "Send Now"}</h2>
            </button>
            </div>
        </form>

      </div>
  )
}

export default Contact
