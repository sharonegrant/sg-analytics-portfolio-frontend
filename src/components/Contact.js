import React from 'react';

function Contact() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Contact & Booking</h2>

      <form style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
        <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
        <textarea placeholder="Your Message" style={{ width: '100%', padding: '0.5rem', height: '80px', marginBottom: '0.5rem' }}></textarea>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
    </section>
  );
}

export default Contact;
