import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto w-3/4" id="contact">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-6xl font-bold">Email</h1>
      <p className="text-xl">Kirim email</p>
      {/* <div className=""> */}
      <form onSubmit={handleSubmit}>
        {status === 'success' && <p className="form-success">Terima kasih! Pesan Anda telah terkirim.</p>}
        {status === 'error' && <p className="form-error">Maaf, terjadi kesalahan saat mengirim pesan. Mohon coba lagi.</p>}
        <div className="form-field px-2 py-2 w-1/2">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
            Nama
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name" required />
        </div>

        <div className="form-field px-2 py-2 w-1/2">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email" required />
        </div>
        <div className="form-field px-2 py-2 w-3/4">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
            Pesan
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" id="message" required></textarea>
        </div>
        <div className="form-field px-2 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Kirim
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}
