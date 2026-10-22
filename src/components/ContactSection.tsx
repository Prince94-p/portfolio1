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
      className="relative z-10 w-full bg-[#F8F7F4] text-[#141312] font-sans selection:bg-[#EAD8C7] selection:text-[#181614] pt-14 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Tint */}
      <div className="absolute top-1/2 left-1/3 w-[36rem] h-[36rem] bg-[#A16207]/[0.02] rounded-full blur-[170px] pointer-events-none" />

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
                  className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#A16207]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-[#A16207]/80 via-[#D0C7BC]/40 to-transparent" />
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
                  <span className="block text-[#141312] drop-shadow-[0_1px_2px_rgba(20,18,16,0.06)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#A16207] drop-shadow-[0_2px_12px_rgba(180,83,9,0.15)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-normal text-[#45413C] leading-relaxed max-w-md mb-8"
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
                    className="group flex items-center justify-between p-3.5 rounded-sm border border-[#E2DDD5] bg-white hover:border-[#A16207] hover:shadow-[0_6px_20px_rgba(24,22,20,0.06)] transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 font-mono text-xs">
                      <span className="text-[#A16207] font-bold tracking-wider text-[11px]">
                        {link.label} //
                      </span>
                      <span className="text-[#141312] group-hover:text-[#A16207] transition-colors text-[11.5px] font-medium">
                        {link.value}
                      </span>
                    </div>
                    <span className="text-[#756E65] group-hover:text-[#A16207] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-xs font-mono">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#E2DDD5] bg-white p-6 sm:p-9 shadow-[0_16px_45px_rgba(24,22,20,0.06)] overflow-hidden"
          >
            {/* Top Amber Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A16207]/50 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#A16207]/70" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-[#A16207]/70" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-[#A16207]/70" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#A16207]/70" />

            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#15803D] bg-[#DCFCE7] text-[#15803D] text-base shadow-xs">
                  ✓
                </div>
                <h3 className="text-3xl text-[#141312] font-normal uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET PREPARED &amp; DISPATCHED
                </h3>
                <p className="text-xs text-[#45413C] font-normal max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your mail client has been initialized to dispatch the message to <span className="text-[#A16207] font-mono font-semibold">princepatel98798@gmail.com</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2.5 rounded-sm border border-[#D0C7BC] hover:border-[#A16207] text-[10px] font-mono tracking-widest text-[#45413C] hover:text-[#141312] bg-[#FAF9F6] uppercase transition-colors"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#756E65] mb-1.5">
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
                      className={`w-full bg-[#FAF9F6] border ${
                        errors.name ? 'border-[#B91C1C]' : 'border-[#DCD6CC]'
                      } focus:bg-white focus:border-[#A16207] focus:ring-1 focus:ring-[#A16207]/30 text-xs text-[#141312] placeholder-[#9E9589] px-4 py-3 outline-none rounded-sm transition-all`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-[#B91C1C] mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#756E65] mb-1.5">
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
                      className={`w-full bg-[#FAF9F6] border ${
                        errors.email ? 'border-[#B91C1C]' : 'border-[#DCD6CC]'
                      } focus:bg-white focus:border-[#A16207] focus:ring-1 focus:ring-[#A16207]/30 text-xs text-[#141312] placeholder-[#9E9589] px-4 py-3 outline-none rounded-sm transition-all`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-[#B91C1C] mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#756E65] mb-1.5">
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
                    className={`w-full bg-[#FAF9F6] border ${
                      errors.message ? 'border-[#B91C1C]' : 'border-[#DCD6CC]'
                    } focus:bg-white focus:border-[#A16207] focus:ring-1 focus:ring-[#A16207]/30 text-xs text-[#141312] placeholder-[#9E9589] p-4 outline-none rounded-sm transition-all resize-none`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                  {errors.message && (
                    <span className="text-[10px] font-mono text-[#B91C1C] mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm bg-[#181614] hover:bg-[#A16207] text-white text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(24,22,20,0.12)] group"
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
        <div className="pt-8 mt-12 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
            <span 
              className="text-base font-bold tracking-widest text-[#141312] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              PRINCE PATEL
            </span>
            <span className="hidden sm:inline text-[#A16207]">•</span>
            <span 
              className="text-[10px] font-mono tracking-[0.2em] text-[#756E65] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              FRONTEND • AI • FULL STACK
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#756E65] tracking-wider">
            © {new Date().getFullYear()} PRINCE PATEL • ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;