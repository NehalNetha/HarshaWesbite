import React, { useState } from 'react'
import Dropdown from './Dropdown';
import Image from 'next/image';

function Contact() {
  const options = ['Basic', 'Premium', 'AMV'];
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    link: '',
    option: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleOptionSelect = (option) => {
    setFormData(prevState => ({ ...prevState, option }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({firstname: '', lastname: '', email: '', link: '', option: '', message: '' });
      } else {
        const data = await response.json();
        setSubmitMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-9 mt-[12rem] mb-[9rem]">
      <div className="flex flex-col gap-3">
        <p className="text-[2.5rem] font-semibold w-[28rem] text-white ">Let's work together to make something awesome!</p>
        <p className="text-[15px] font-regular w-[25rem] text-white text-justify	">  Need a captivating lyric video or a mesmerizing visual for your album? Let's collaborate to bring your vision to life and create something extraordinary...</p>

        <div className="flex flex-row ml-[4rem] mt-5 gap-6">
            <a href="https://www.instagram.com/lyricvideomakers/" target="_blank">
              <img 
                  src = "/Instagram_logo_2016.png"
                  className = "w-[3rem] h-[3rem]"

              />
            </a>

            <a href="https://on.soundcloud.com/FR8hvnNAfdKVPt8U6" target="_blank" >
              <img 
                  src = "/soundcloud.svg"
                  className = "w-[3.5rem] h-[3.5rem] "

              />
            </a>

            <a href="https://open.spotify.com/user/nuiorn8mlf6kaq5p4eflc4iwt?si=FnarDsmiQN2dBtq2ltlZlw" target="_blank" >
              <img 
                  src = "/Spotify_icon.svg.png"
                  className = "w-[3rem] h-[3rem] "

              />
            </a>

            
        </div>

      </div>
 
      <div className="md:ml-[6rem]">
        <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-8 ">
          <div className="flex flex-ro gap-11">
            <input 
              type="text" 
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First Name" 
              className="w-[15.5rem] px-4 py-2 bg-transparent border-b-[1px] border-white text-white placeholder-white placeholder-white::placeholder focus:outline-none focus:border-yellow-300 transition-all duration-300"
              required
            />

            <input 
              type="text" 
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last Name" 
              className="w-[15.5rem] px-4 py-2 bg-transparent border-b-[1px] border-white text-white placeholder-white placeholder-white::placeholder focus:outline-none focus:border-yellow-300 transition-all duration-300"
              required
            />
          </div>

          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email" 
            className="md:w-[34rem] w-[15rem] px-4 py-2 bg-transparent border-b-[1px] border-white text-white placeholder-white placeholder-white::placeholder focus:outline-none focus:border-yellow-300 transition-all duration-300"
            required
          />
          <div className="flex flex-row gap-11">
            <input 
              type="text" 
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="Instagram Handle" 
              className="w-[15.5rem] px-4 py-2 bg-transparent border-b-[1px] border-white text-white placeholder-white placeholder-white::placeholder focus:outline-none  transition-all duration-300"
            />
            <Dropdown options={options} placeholder="Select an option" onSelect={handleOptionSelect} />
          </div>
          <input
            type="text" 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message" 
            className="mt-3 w-full px-4 pb-2 pt-0 bg-transparent border-b border-white text-white placeholder-white placeholder:text-sm focus:outline-none focus:border-white focus:ring-0 resize-none"
            required
          />
          <button 
            type="submit" 
            className="w-[12rem] text-black mt-3 px-3 py-3 bg-white rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <div className="flex flex-row items-center justify-center">
              <p className="pl-3">{isSubmitting ? 'Sending...' : 'Send message'}</p> 
              <img src="/arrow.svg" className="w-[2rem] h-[2rem]" alt="Send"/>
            </div>
          </button>
          {submitMessage && (
            <p className={`mt-2 ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact