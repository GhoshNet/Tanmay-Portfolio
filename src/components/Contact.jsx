import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { RESUME_URL } from "../constants";
import { trackContactFormSubmit, trackResumeDownload, trackSocialClick } from "../utils/analytics";
import { SectionHead } from "./ui";

const field =
  "w-full border border-line bg-ink px-4 py-3.5 text-[15px] text-bone placeholder:text-mute/70 focus:border-amber focus:outline-none";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  // { ok: boolean, text: string } shown under the form instead of a browser alert.
  const [status, setStatus] = useState(null);

  // Initialize EmailJS once on mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({ ok: false, text: "Email service is not configured yet. Please reach out to me via LinkedIn." });
      return;
    }

    let timedOut = false;
    const timeoutId = setTimeout(() => {
      timedOut = true;
      setLoading(false);
      setStatus({ ok: false, text: "Request timed out. Please try again or reach out via LinkedIn." });
    }, 10000);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          title: form.name,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          clearTimeout(timeoutId);
          setLoading(false);
          trackContactFormSubmit();
          setStatus({ ok: true, text: "Thank you for reaching out! I'll get back to you as soon as possible." });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          clearTimeout(timeoutId);
          console.error("EmailJS error:", error);
          if (timedOut) return;
          setLoading(false);
          setStatus({ ok: false, text: "Something went wrong. Please try reaching out via LinkedIn instead." });
        }
      );
  };

  return (
    <>
      <SectionHead n="08" label="Get in touch" title="Contact" />

      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <form
          data-l
          onSubmit={handleSubmit}
          className={`${styles.card} flex flex-col gap-5 p-[clamp(20px,3vw,32px)]`}
        >
          <label className="flex flex-col gap-2">
            <span className={styles.label}>Your Name</span>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Your name"
              className={field}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className={styles.label}>Your Email</span>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="your@email.com"
              className={field}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className={styles.label}>Your Message</span>
            <textarea
              id="contact-message"
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="How can I help you?"
              className={`${field} resize-y`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className={`${styles.btn} ${styles.btnSolid} disabled:opacity-60`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`min-w-0 flex-1 text-[14px] leading-snug ${status?.ok ? "text-bone" : "text-amber"}`}
            >
              {status?.text}
            </p>
          </div>
        </form>

        <div className="self-start">
          <p data-l="text" className="max-w-[40ch] text-[17px] leading-[1.7] text-mute">
            Let's collaborate to build intelligent systems that make a difference.
          </p>
          <ul className="mt-7 border-t border-line">
            <li data-l className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className={styles.label}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/tanmay-g/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("LinkedIn")}
                className="font-mono text-[13px] hover:text-amber"
              >
                linkedin.com/in/tanmay-g ↗
              </a>
            </li>
            <li data-l className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className={styles.label}>GitHub</span>
              <a
                href="https://github.com/GhoshNet"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("GitHub")}
                className="font-mono text-[13px] hover:text-amber"
              >
                github.com/GhoshNet ↗
              </a>
            </li>
            <li data-l className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className={styles.label}>Resume</span>
              <a
                href={RESUME_URL}
                download="Tanmay_Ghosh_Resume.pdf"
                onClick={trackResumeDownload}
                className="font-mono text-[13px] hover:text-amber"
              >
                Download PDF ↓
              </a>
            </li>
            <li data-l className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className={styles.label}>Based in</span>
              <span className="font-mono text-[13px]">Dublin, Ireland</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
