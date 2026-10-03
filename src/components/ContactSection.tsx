import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Sender name required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email channel required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Valid email address required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Transmission payload required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Portfolio Transmission from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Prince,\n\nSender: ${formData.name}\nEmail: ${formData.email}\n\nPayload:\n${formData.message}\n`
    );
    window.location.href = `mailto:princepatel98798@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactLinks = [
    {
      label: 'EMAIL',
      value: 'princepatel98798@gmail.com',
      href: 'mailto:princepatel98798@gmail.com',
      external: false,
    },
    {
      label: 'GITHUB',
      value: 'github.com/Prince94-p',
      href: 'https://github.com/Prince94-p',
      external: true,
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/prince-patel-a9b579372',
      href: 'https://www.linkedin.com/in/prince-patel-a9b579372',
      external: true,
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/[0.03] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Open to internships, hackathon teams, open-source collaborations, and engineering opportunities. Send a direct dispatch below.
              </p>

              {/* Sleek Compact Contact Rows */}
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0C0A08]/90 hover:border-[#D4AF37]/80 hover:bg-[#15110E] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex items-center space-x-3 font-mono text-xs">
                      <span className="text-[#D4AF37] font-semibold tracking-wider text-[11px]">
                        {link.label} //
                      </span>
                      <span className="text-[#E8DFD8] group-hover:text-white transition-colors text-[11.5px]">
                        {link.value}
                      </span>
                    </div>
                    <span className="text-[#8C6D4F] group-hover:text-[#D4AF37] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-xs font-mono">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#D4AF37]/70" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-[#D4AF37]/70" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-[#D4AF37]/70" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#D4AF37]/70" />

            {sent ? (
              <div className="py-14 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] text-base shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET PREPARED &amp; DISPATCHED
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your mail client has been initialized to dispatch the message to <span className="text-[#F7E7C4] font-mono">princepatel98798@gmail.com</span>.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[10px] font-mono tracking-widest text-[#C4B5A5] hover:text-white uppercase transition-colors"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // SENDER
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Enter name"
                      className={`w-full bg-[#120F0C] border ${
                        errors.name ? 'border-red-500/80' : 'border-[#8C6D4F]/30'
                      } focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40 text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-all`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // CHANNEL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="Enter email"
                      className={`w-full bg-[#120F0C] border ${
                        errors.email ? 'border-red-500/80' : 'border-[#8C6D4F]/30'
                      } focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40 text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-all`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-red-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                    // PAYLOAD
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Enter transmission payload..."
                    className={`w-full bg-[#120F0C] border ${
                      errors.message ? 'border-red-500/80' : 'border-[#8C6D4F]/30'
                    } focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40 text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-all resize-none`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                  {errors.message && (
                    <span className="text-[10px] font-mono text-red-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#E8DFD8] hover:text-black text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>EXECUTE DISPATCH</span>
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 ml-2">
                    ↗
                  </span>
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* Integrated Restrained Footer */}
        <div className="pt-10 mt-12 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
            <span 
              className="text-base font-bold tracking-widest text-[#EAD8C7] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              PRINCE PATEL
            </span>
            <span className="hidden sm:inline text-[#8C6D4F]">•</span>
            <span 
              className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              FRONTEND • AI • FULL STACK
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#8C6D4F] tracking-wider">
            © {new Date().getFullYear()} PRINCE PATEL • ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;