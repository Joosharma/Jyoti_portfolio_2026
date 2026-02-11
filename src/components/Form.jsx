import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kkuwoyi",
        "template_ym01qcw",
        form.current,
        "j0qPTSZJvdYCSGl_r",
      )
      .then(
        (result) => {
          console.log("SUCCESS", result);
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log("ERROR", error);
          alert("Failed to Send ❌");
        },
      );
  };

  return (
    <div className="sm:w-2/3 max-sm:w-full bg-background-secondary border border-border-color rounded-2xl p-6">
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <div className="text-white">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-2 mb-4 p-3 rounded-lg bg-background-main border border-border-color text-white"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="text-white">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 mb-4 p-3 rounded-lg bg-background-main border border-border-color text-white"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="text-white w-full">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full mt-2 mb-4 p-3 rounded-lg bg-background-main border border-border-color text-white"
            placeholder="Enter subject"
          />
        </div>

        {/* Message */}
        <div className="text-white w-full">
          <label>Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full mt-2 mb-4 p-3 rounded-lg bg-background-main border border-border-color text-white"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full hover:cursor-pointer  hover:bg-gradient-to-r from bg-primary-orange to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
