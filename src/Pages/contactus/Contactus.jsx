import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_221xug8",     // ← replace this
        "template_ay2o9na",    // ← replace this
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email,
        },
        "apZ40b1S1rXvN4tj3"      // ← replace this
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setSending(false);
        }
      );
  };

  return (
    <div className="h-[68%] flex items-center font-inter justify-center px-4 py-12 mt-0 lg:mt-12 " id="contact">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-[33px] sm:text-[60px] font-inter font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 lg:text-[17px] sm:text-[16px]  mb-8">
            Empowering your financial journey forward is just one conversation away. Connect with us today to start building a stronger and secure financial future.
          </p>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3"><img className="w-[22px]" src="/images/gps.png" alt="location" /></span>
              <p className="text-[14px] sm:text-[17px] font-bold">OFFICE</p>
            </div>
            <p className="text-gray-700 text-[15px] sm:text-[16px] ml-9">
              3/12 (Wealth Builders), Opp. Yash Hospital, <br className="hidden lg:block" /> 
             Saidham Landmark, Elgin Road, Lal Bahadur Shastri Marg,,<br className="hidden lg:block"/>
              Civil Lines, Prayagraj-211001
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3"><img className="w-[22px]" src="/images/phone-call.png" alt="phone" /></span>
              <p className="text-[15px] sm:text-[17px] font-bold">Contact Numbers:</p>
            </div>
            <p className="text-gray-700 text-[15px] sm:text-[15px] ml-9">
               +91 7986480232 | <br  className="sm:hidden" /> +91 9335157730
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3"><img className="w-[22px]" src="/images/email.png" alt="email" /></span>
              <p className="text-[15px] sm:text-[17px] font-bold">Emails:</p>
            </div>
            <p className="text-gray-700 text-[15px] sm:text-[16px] ml-9">
                p.nmehrotra@yahoo.co.in  <br /> wealthbuilders1989@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#3B3B3B] p-6 sm:p-8 rounded-xl shadow-md w-full">
          <div className="text-white font-bold text-lg mb-6 flex justify-center items-center gap-2">
            <img src="/images/Vector 2.png" alt="Wealth Builders" className="h-6" />
            <span>WEALTH BUILDERS</span>
          </div>
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No."
                required
                className="w-full sm:w-1/2 p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full sm:w-1/2 p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              required
              className="w-full p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
