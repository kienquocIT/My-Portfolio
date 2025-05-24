import React, { useRef, useState } from 'react'
import styles from './Form.module.scss'
import emailjs from '@emailjs/browser'

export default function Form() {
  console.log('Environment variables:', {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  });

  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    if (!process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      console.error('EmailJS Public Key is not defined. Please check your .env file.')
      return
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        setStatus('success')
        form.current.reset()
      },
      (error) => {
        setStatus('error')
        console.error('EmailJS error:', error)
      }
    )
  }

  return (
    <div>
      <form className={styles.form} onSubmit={sendEmail} ref={form}>
        <div className={styles.formHeader}>
          <div className={styles.formHeaderTitle}>Contact Us</div>
          <div className={styles.formHeaderDescription}>Please fill in the form below to contact us</div>
        </div>
        <div className={styles.formBody}>
          <div className={styles.formLabel}>Name</div>
          <div className={styles.formInput}>
            <input type="text" name='user_name' placeholder='Enter your name' required />
          </div>
          <div className={styles.formLabel}>Email</div>
          <div className={styles.formInput}>
            <input type="email" name='user_email' placeholder='Enter your email' required />
          </div>
          <div className={styles.formLabel}>Message</div>
          <div className={styles.formInput}>
            <textarea name='user_message' placeholder='Enter your message' required />
          </div>
          <div className={styles.formButton}>
            <button type='submit' disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
          </div>
          {status === 'success' && (
            <div className={styles.formStatus} style={{ color: 'green' }}>
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className={styles.formStatus} style={{ color: 'red' }}>
              Failed to send message. Please try again.
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
