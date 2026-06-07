import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const galleryImagesByCol = [
    '/gallery_images/IMG-20260320-WA0009.jpg',
    '/gallery_images/IMG-20260320-WA0010.jpg',
    '/gallery_images/IMG-20260320-WA0011.jpg',
    '/gallery_images/IMG-20260320-WA0013.jpg',
    '/gallery_images/IMG-20260320-WA0015.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="nav-brand">
            <img 
  src="/android-chrome-512x512.png" 
  alt="Tassels by Saritha Logo" 
  className="nav-logo" 
/>
            <span className="brand-text">Tassels <span className="brand-accent">by Saritha</span></span>
          </a>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#collections" onClick={closeMenu}>Collections</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/ai_images/saree.jpg" alt="Handcrafted saree kuchu and silk saree tassels by Saritha in Davanagere" />
        </div>
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>The Art of <span className="accent">Handcrafted</span> Saree Kuchu & Tassels</h1>
          <p>Every thread tells a story. At Tassels by Saritha, we weave tradition and artistry into every saree kuchu — handcrafted tassels made with care to adorn the finest silk sarees in Davanagere and across Karnataka.</p>
          <div className="hero-btns">
            <a href="#collections" className="btn btn-primary" data-track="hero_explore_btn">Explore Collections</a>
            <a href="#contact" className="btn btn-outline" data-track="hero_quote_btn">Get a Quote</a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about section-padding" id="about">
        <div className="container">
          <motion.div
            className="about-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="about-image" variants={fadeInUp}>
              <img src="/ai_images/Gemini_Generated_Image_eqqjceqqjceqqjce.jpg" alt="Artisan crafting saree kuchu and silk tassels in Davanagere" />
            </motion.div>
            <motion.div className="about-text" variants={fadeInUp}>
              <h2>Crafted with Tradition, Woven with Love</h2>
              <p>Tassels by Saritha is a homegrown saree kuchu and handmade tassel studio based in Davanagere, Karnataka — built from a passion for silk sarees and fine detailing. We are known for creating the best saree kuchu designs in Davanagere.</p>
              <p>From bridal saree kuchu to elegant minimal kuchu styles, every tassel is personalised to match your saree perfectly. Whether it's a custom colour combination, designer kuchu work, or a unique customer-inspired design, each piece is made with precision and passion.</p>
              <p>Proudly crafting personalised saree kuchu (ಸೀರೆ ಕುಚ್ಚು) and tassels for customers across Karnataka who value tradition, detail, and quality.</p>
              <div className="about-stats">
                <div className="stat">
                  <span className="number">100%</span>
                  <span className="label">Handcrafted</span>
                </div>
                <div className="stat">
                  <span className="number">5K+</span>
                  <span className="label">Sarees Adorned</span>
                </div>
                <div className="stat">
                  <span className="number">50+</span>
                  <span className="label">Unique Designs</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="categories section-padding" id="collections">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Our Saree Kuchu Collections</h2>
            <p>From elegant bridal saree kuchu to personalised custom kuchu designs, each tassel is handcrafted to complement your silk saree beautifully.</p>
          </motion.div>

          <motion.div
            className="categories-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { id: 'premium', title: 'Premium Saree Kuchu', desc: 'Premium handcrafted saree kuchu designs with fine detailing and stylish finishing for special occasions and grand silk saree collections.', img: '/ai_images/Gemini_Generated_Image_gzr9qxgzr9qxgzr9.jpg', badge: 'Best Seller' },
              { id: 'bridal', title: 'Bridal Saree Kuchu', desc: 'Detailed bridal saree kuchu designed for wedding silk sarees with rich zari work, beads, and elegant detailing. Perfect kuchu for bridal pattu sarees.', img: '/ai_images/Gemini_Generated_Image_kpl9xhkpl9xhkpl9.jpg', badge: 'Exclusive' },
              { id: 'classic', title: 'Classic Saree Kuchu', desc: 'Simple and timeless saree kuchu styles perfect for traditional silk sarees and everyday elegance.', img: '/ai_images/Gemini_Generated_Image_n1unein1unein1un.jpg' },
              { id: 'custom', title: 'Custom Kuchu Designs', desc: 'Have a unique kuchu design in mind? We create personalised saree kuchu based on your saree colour, pattern, and style preferences.', img: '/gallery_images/IMG-20260320-WA0009.jpg', badge: 'Personalised' }
            ].map(col => (
              <motion.div className="category-card" key={col.id} variants={fadeInUp} whileHover={{ y: -8 }} onClick={() => setSelectedCollection(col)} style={{ cursor: 'pointer' }} data-track={`collection_card_${col.id}`}>
                <div className="category-card-img">
                  <img src={col.img} alt={`${col.title} - saree kuchu design`} />
                  {col.badge && <span className="category-card-badge">{col.badge}</span>}
                </div>
                <div className="category-card-body">
                  <h3>{col.title}</h3>
                  <p>{col.desc}</p>
                  <span className="view-link">View Kuchu Designs →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Collection Modal */}
          <AnimatePresence>
            {selectedCollection && (
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCollection(null)}
              >
                <motion.div
                  className="modal-content"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button className="modal-close" onClick={() => setSelectedCollection(null)}><X size={24} /></button>
                  <div className="modal-header">
                    <h2>{selectedCollection.title}</h2>
                    <p>{selectedCollection.desc}</p>
                  </div>
                  <div className="modal-gallery">
                    {galleryImagesByCol.map((imgName, i) => (
                      <div className="modal-gallery-item" key={i}>
                        <img src={`/collections/${selectedCollection.id}/${imgName.split('/').pop()}`} alt={`${selectedCollection.title} ${i + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="modal-footer">
                    <a href="#contact" className="btn btn-primary" onClick={() => setSelectedCollection(null)} data-track="modal_enquire_btn">Enquire About This Collection</a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery section-padding" id="gallery">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Our Saree Kuchu Work</h2>
            <p>A glimpse into the artistry and craftsmanship behind every saree kuchu and tassel creation.</p>
          </motion.div>
          <motion.div
            className="gallery-masonry"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              '/gallery_images/IMG-20260320-WA0050.jpg',
              '/gallery_images/IMG-20260320-WA0010.jpg',
              '/gallery_images/IMG-20260320-WA0029.jpg',
              '/gallery_images/IMG-20260320-WA0015.jpg',
              '/gallery_images/IMG-20260320-WA0011.jpg',
              '/gallery_images/IMG-20260320-WA0039.jpg',
              '/gallery_images/IMG-20260320-WA0037.jpg',
              '/gallery_images/IMG-20260320-WA0041.jpg',
              '/gallery_images/IMG-20260320-WA0009.jpg',
              '/gallery_images/IMG-20260320-WA0020.jpg',
              '/gallery_images/IMG-20260320-WA0021.jpg'
            ].map((img, i) => (
              <motion.div className="gallery-masonry-item" key={i} variants={fadeInUp}>
                <img src={img} alt={`Saree kuchu design ${i + 1} - handcrafted silk saree tassels Davanagere`} loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding" id="reviews">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Customer Love</h2>
            <p>Hear from the beautiful brides and boutiques who trust Tassels by Saritha for their saree kuchu needs.</p>
          </motion.div>
          <motion.div className="testimonials-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { text: "The bridal saree kuchu was absolutely breathtaking! They perfectly matched the zari on my Kanchipuram silk. Best kuchu work in Davanagere!", author: "Ananya Sharma" },
              { text: "Tassels by Saritha has been supplying saree kuchu for my boutique for two years. Their kuchu designs always sell out first.", author: "Kavya, Silk Heritage Boutique" },
              { text: "I requested a custom kuchu design with temple motif for my mother's 60th birthday saree. The saree kuchu they created was so unique and beautiful.", author: "Meera Reddy" }
            ].map((review, i) => (
              <motion.div className="testimonial-card" key={i} variants={fadeInUp}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{review.text}"</p>
                <div className="testimonial-author">— {review.author}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section-padding" id="faq">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our handcrafted saree kuchu and tassels.</p>
          </motion.div>
          <div className="faq-list">
            {[
              { q: "What is saree kuchu and where can I get the best saree kuchu in Davanagere?", a: "Saree kuchu (also called saree tassels or ಸೀರೆ ಕುಚ್ಚು in Kannada) is the decorative knotted fringe attached to silk sarees. Tassels by Saritha is the best place for handcrafted saree kuchu in Davanagere, Karnataka." },
              { q: "Do you offer custom saree kuchu designs based on saree colour?", a: "Yes. We create customised saree kuchu designs based on your saree colour, pattern, and style preferences. Whether it's bridal kuchu or designer kuchu work, we ensure a perfect match." },
              { q: "How long does a saree kuchu order take to complete?", a: "Most saree kuchu orders are completed within a few days depending on the design and quantity. Bridal saree kuchu and custom designer kuchu may take a little longer." },
              { q: "Do you ship saree kuchu outside Davanagere?", a: "Yes. We ship saree kuchu and tassels across Karnataka and other cities in India based on availability and order size." },
              { q: "Can I share my own saree kuchu design reference?", a: "Absolutely. You can share inspiration images or kuchu design ideas, and we'll create a customised saree kuchu version based on your preference." },
              { q: "What types of saree kuchu designs do you offer?", a: "We offer bridal saree kuchu, premium designer kuchu, classic kuchu designs, and fully custom saree kuchu. Our kuchu work includes crochet kuchu, beaded kuchu, zari kuchu, and thread kuchu for pattu and silk sarees." }
            ].map((faq, i) => (
              <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  {faq.q}
                  <motion.div
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-answer"><p>{faq.a}</p></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section-padding" id="contact">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Get in Touch</h2>
            <p>Have a special saree that needs the perfect saree kuchu? We'd love to help create the best kuchu design for your silk saree.</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3>Let's Create Beautiful Saree Kuchu</h3>
              <p>Whether you're looking for bridal saree kuchu, classic kuchu designs, or a completely customised kuchu style, we're here to help bring your vision to life. Best saree kuchu work in Davanagere, Karnataka.</p>

              <div className="contact-detail">
                <div className="icon"><MapPin size={20} /></div>
                <div className="detail-text">
                  <h4>Workshop</h4>
                  <p>Vinayaka nagara 4th cross,<br />Davanagere – 577001</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="icon"><Phone size={20} /></div>
                <div className="detail-text">
                  <h4>Phone</h4>
                  <p>+91 96205 35445</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="icon"><Mail size={20} /></div>
                <div className="detail-text">
                  <h4>Email</h4>
                  <p>haribabusr78@gmail.com</p>
                </div>
              </div>

              <a href="https://wa.me/919620535445" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" data-track="contact_whatsapp_btn">
                💬 Chat on WhatsApp
              </a>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459.01756492378615!2d75.9006523!3d14.4678552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba258c6809fa03%3A0xe7755403ca0ef76d!2sTassels%20By%20Saritha!5e1!3m2!1sen!2sin!4v1779289896048!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </motion.div>

            <motion.form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} data-track="contact_form_submit">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection">Collection</label>
                  <select id="collection">
                    <option value="" disabled selected>Select a collection</option>
                    <option value="classic">Classic</option>
                    <option value="premium">Premium</option>
                    <option value="bridal">Bridal</option>
                    <option value="custom">Custom Design</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity (pairs)</label>
                  <input type="number" id="quantity" min="1" placeholder="Number of pairs needed" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your saree colour, design ideas, or custom requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Request Design</button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-text">Tassels <span className="brand-accent">by Saritha</span></div>
              <p>Handcrafted saree kuchu and silk saree tassels (ಸೀರೆ ಕುಚ್ಚು), woven with tradition and love in Davanagere, Karnataka. The best saree kuchu designs for every silk saree.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Collections</h4>
              <ul className="footer-links">
                <li><a href="#collections">Premium</a></li>
                <li><a href="#collections">Bridal</a></li>
                <li><a href="#collections">Classic</a></li>
                <li><a href="#collections">Custom</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Tassels by Saritha — Best Saree Kuchu in Davanagere. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/sai_tassels_" aria-label="Instagram" data-track="footer_instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" data-track="footer_facebook"><Facebook size={18} /></a>
              <a href="https://wa.me/918431534540" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-track="footer_whatsapp"><MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
