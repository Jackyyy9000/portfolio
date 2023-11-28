import emailjs from '@emailjs/browser';

import { useRef, useState } from "react";

export const MyForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef<HTMLFormElement>(null);

    const handleNameChange = (value: string) => {
        setName(value);
    }

    const handleEmailChange = (value: string) => {
        setEmail(value);
    }

    const handleMessageChange = (value: string) => {
        setMessage(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
        if (form.current) {
            
            emailjs.sendForm("service_al50a38", "template_c919tds", form.current, "nEcvmVNxFuq6jsYMw")
                .then((result) => {
                    console.log(result.text);
                    alert("Message sent successfully.");
                }, (error) => {
                    console.log(error.text);
                    alert("Something went wrong, please try again later.");
                });
        }

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <>
            <form ref={form} action="" onSubmit={handleSubmit} className="flex flex-col items-center w-[100%]">
                <input 
                    className="w-[100%] block my-2 p-2 bg-slate-900 border border-gray-700 rounded-md" 
                    type="text" 
                    placeholder="Your name...*"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e.target.value)}
                    name="user_name"
                    required
                    maxLength={256}
                />
                <input 
                    className="w-[100%] block my-2 p-2 bg-slate-900 border border-gray-700 rounded-md" 
                    type="email"
                    placeholder="Your email...*"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value)}
                    name="user_email"
                    required
                    maxLength={256}
                />
                <textarea 
                    className="w-[100%] block h-[200px] my-2 p-2 bg-slate-900 border border-gray-700 rounded-md resize-none" 
                    placeholder="Your message...*"
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleMessageChange(e.target.value)}
                    name="message"
                    required
                    maxLength={3000}
                />
                <button className="w-[100%] block my-2 p-2 bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-md font-semibold">Send</button>
            </form>
        </>
    )
}