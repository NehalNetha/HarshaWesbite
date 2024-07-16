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
        console.log(formData)
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
    <div className="flex flex-col lg:flex-row gap-9 mt-16 md:mt-24 lg:mt-48 mb-16 md:mb-24 lg:mb-36 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-3 lg:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Let's work together to make something awesome!</h2>
        <p className="text-sm md:text-base font-regular text-white text-justify max-w-prose">Need a captivating lyric video or a mesmerizing visual for your album? Let's collaborate to bring your vision to life and create something extraordinary...</p>

        <div className="flex flex-row mt-5 gap-6 justify-center lg:justify-start">
          <a href="https://www.instagram.com/lyricvideomakers/" target="_blank" rel="noopener noreferrer">
            <Image src="/Instagram_logo_2016.png" alt="Instagram" width={48} height={48} />
          </a>
          <a href="https://on.soundcloud.com/FR8hvnNAfdKVPt8U6" target="_blank" rel="noopener noreferrer">
            <Image src="/soundcloud.svg" alt="SoundCloud" width={56} height={56} />
          </a>
          <a href="https://open.spotify.com/user/nuiorn8mlf6kaq5p4eflc4iwt?si=FnarDsmiQN2dBtq2ltlZlw" target="_blank" rel="noopener noreferrer">
            <Image src="/Spotify_icon.svg.png" alt="Spotify" width={48} height={48} />
          </a>
        </div>
      </div>
 
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <input 
              type="text" 
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First Name" 
              className="w-full md:w-1/2 px-4 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-yellow-300 transition-all duration-300"
              
            />
            <input 
              type="text" 
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last Name" 
              className="w-full md:w-1/2 px-4 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-yellow-300 transition-all duration-300"
              
            />
          </div>

          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email" 
            className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-yellow-300 transition-all duration-300"
            required
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <input 
              type="text" 
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="Instagram Handle" 
              className="w-full md:w-1/2 px-4 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none transition-all duration-300"
            />
            <div className="w-full md:w-1/2">
              <Dropdown options={options} placeholder="Select an option" onSelect={handleOptionSelect}   selectedOption={formData.option} />
            </div>
          </div>
          <input
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message" 
            className="w-full px-4 py-2  bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-white focus:ring-0 resize-none min-h-[50px]"
            
          />
          <button 
            type="submit" 
            className="w-full md:w-48 text-black mt-3 px-3 py-3 bg-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gray-200"
            disabled={isSubmitting}
          >
            <div className="flex flex-row items-center justify-center">
              <p className="mr-2">{isSubmitting ? 'Sending...' : 'Send message'}</p> 
              <Image src="/arrow.svg" width={24} height={24} alt="Send"/>
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