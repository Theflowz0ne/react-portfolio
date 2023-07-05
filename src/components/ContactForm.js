import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

function ContactForm() {
    const form = useRef();

    const [open, setOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_0al3um9',
                'template_ixxnt8v',
                form.current,
                'WtN0iGPag6RGrByC8',
            )
            .then(
                (result) => {
                    setOpen(!open);
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };
    return (
        <>
            <div className="flex flex-col">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 shadow-2xl transition hover:scale-110"
                    ref={form}
                    onSubmit={sendEmail}>
                    <label
                        className="block text-gray-700 text-sm font-bold my-2"
                        htmlFor="user_name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="user_name"
                        type="text"
                        name="user_name"
                        required
                    />
                    <label
                        className="block text-gray-700 text-sm font-bold my-2"
                        htmlFor="user_email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="user_email"
                        type="email"
                        name="user_email"
                        required
                    />
                    <label
                        className="block text-gray-700 text-sm font-bold my-2"
                        htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        required
                    />
                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
            <Alert
                open={open}
                setOpen={setOpen}
            />
        </>
    );
}

export default ContactForm;
