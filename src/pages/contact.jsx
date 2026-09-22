import { useState } from 'react'

const initialForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="container-page py-16">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
        <p className="mt-3 text-ink/60">
          Questions about an order or just want to say hello? Send us a
          message and we'll get back to you.
        </p>

        {submitted && (
          <div className="mt-6 rounded-xl border border-sage/30 bg-sage/10 px-5 py-4 text-sm font-medium text-sage">
            Thanks — your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-ink/70">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-cobalt"
              placeholder="Jo Abera"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-cobalt"
              placeholder="joabera@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink/70">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-cobalt"
              placeholder="Order question"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-cobalt"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-fit rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
