'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    html: '<p>Thank you for contacting us. We have received your message and will respond shortly.</p>',
                    confirmButtonColor: '#2563eb',
                });
                setFormData({ name: '', email: '', company: '', phone: '', message: '' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: result.error || 'Something went wrong.',
                });
            }
        } catch  {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send message.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <div className="w-full px-6 py-12 md:px-20 bg-white flex flex-col md:flex-row justify-between">
            {/* Form Section */}
            <div className="w-full md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-6">
                    <span className="text-green-600">SEND US A </span>
                    <span className="text-blue-800">MESSAGE</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="border p-3 w-full text-black" />
                        <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Email address" className="border p-3 text-black w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="border p-3 w-full text-black text-black" />
                        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border p-3 w-full text-black" />
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Enter your message..." className="border p-3 w-full text-black h-32" />
                    <button type="submit" disabled={loading} className={`bg-blue-800 text-white px-6 py-2 rounded-full font-bold ${loading ? 'opacity-60' : ''}`}>
                        {loading ? 'Submitting...' : 'SUBMIT REQUEST'}
                    </button>
                </form>
            </div>

            {/* Contact Info Section */}
            <div className="w-full md:w-1/3 mt-10 md:mt-0 p-8 bg-gradient-to-b from-green-300 to-white shadow-lg rounded-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">CONTACT DETAILS</h3>
                <div className="space-y-4 text-sm text-gray-700">
                    <div className="flex gap-3 items-start">
                        <FaMapMarkerAlt className="text-green-600 mt-1" />
                        <p>Address : A-03, Anant Tower, Near JK Hospital, Kolar Road, Bhopal (M.P)</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <FaMapMarkerAlt className="text-green-600 mt-1" />
                        <p>Address : 201, Vikas Vehicle Yard, Jabalpur Road, Baheria, Sagar (M.P)</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaPhone className="text-green-600" />
                        <p>+91 8889013444</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaEnvelope className="text-green-600" />
                        <p>pramanengineering12@gmail.com</p>
                    </div>
                </div>
                <div className="mt-6 flex gap-3">
                    <a href="#" className="bg-blue-800 text-white p-2 rounded"><FaFacebookF /></a>
                    <a href="#" className="bg-cyan-600 text-white p-2 rounded"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
