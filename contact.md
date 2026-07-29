---
layout: default
title: Contact
permalink: /contact/
---

<section class="about-hero">
  <div class="about-hero-inner">
    <div class="eyebrow"><span class="ping"></span> GET IN TOUCH</div>
    <h1>Let's Connect</h1>
    <p class="lead">Have a question, an idea, or feedback to share? I'd love to hear from you.</p>
  </div>
</section>

<section class="about-section">
  <div class="about-section-inner">
    <p style="max-width: 640px; margin: 0 auto; text-align: center; color: var(--slate); font-size: 1.05rem; line-height: 1.7;">
      Whether you've discovered a bug in a tutorial, want a topic covered, have an AI tool worth exploring, know of a scholarship opportunity, or simply want to say hello—your message is always welcome. Many of the best ideas on Techtonz begin with conversations from readers like you.
    </p>
  </div>
</section>

<section class="about-section" style="padding-top: 10px;">
  <div class="about-section-inner">
    <h2 style="text-align: center; margin-bottom: 28px;">What You Can Reach Out About</h2>
    <div class="contact-topics">
      <div class="contact-topic">
        <div class="contact-topic-icon">💡</div>
        <h3>Topic Requests</h3>
        <p>Suggest a tutorial, guide, or concept you'd like to see covered.</p>
      </div>
      <div class="contact-topic">
        <div class="contact-topic-icon">🤖</div>
        <h3>AI & Tech Tools</h3>
        <p>Recommend new AI tools, frameworks, or technologies for review.</p>
      </div>
      <div class="contact-topic">
        <div class="contact-topic-icon">🐛</div>
        <h3>Corrections & Feedback</h3>
        <p>Help improve existing articles by reporting errors or sharing suggestions.</p>
      </div>
      <div class="contact-topic">
        <div class="contact-topic-icon">🤝</div>
        <h3>Collaborations</h3>
        <p>Interested in working together? Let's discuss opportunities.</p>
      </div>
      <div class="contact-topic">
        <div class="contact-topic-icon">🎓</div>
        <h3>Scholarship Opportunities</h3>
        <p>Share verified scholarships and educational opportunities for the community.</p>
      </div>
      <div class="contact-topic">
        <div class="contact-topic-icon">👋</div>
        <h3>Just Say Hello</h3>
        <p>Whether you're a student, developer, or simply curious—I'd be happy to hear from you.</p>
      </div>
    </div>
  </div>
</section>

<section class="about-section">
  <div class="about-section-inner contact-form-wrap">
    <h2>Send a Message</h2>
    <p class="contact-form-intro">Fill out the form below, and I'll get back to you as soon as I can.</p>

    <!-- Replace YOUR_FORM_ID with your real Formspree form ID -->
    <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form-row">
        <div class="form-field">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>
        </div>
        <div class="form-field">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required>
        </div>
      </div>
      <div class="form-field">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me what's on your mind..." required></textarea>
      </div>
      <button type="submit" class="btn-primary" style="border: none; cursor: pointer;">Send Message</button>
    </form>
  </div>
</section>

<section class="about-section">
  <div class="about-section-inner">
    <div class="name-highlight" style="text-align: center;">
      <h2>Prefer Email?</h2>
      <p>You can always reach me directly at:</p>
      <p style="margin: 16px 0 12px;">
        <a href="mailto:hello@techtonz.com" class="email-link">📧 hello@techtonz.com</a>
      </p>
      <p style="margin-bottom: 0;">I personally read every email and do my best to respond as quickly as possible.</p>
    </div>
  </div>
</section>

<section class="about-section">
  <div class="about-section-inner">
    <h2 style="text-align: center;">Stay Connected</h2>
    <p style="text-align: center; color: var(--slate); max-width: 560px; margin: 0 auto 32px; font-size: 1.05rem; line-height: 1.6;">
      Follow Techtonz for practical tutorials, AI insights, Python tips, data science guides, scholarship opportunities, and updates whenever new articles are published.
    </p>

    <!-- Update the href values with your real profile URLs -->
    <div class="social-grid">
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook">
        <span class="social-icon">📘</span>
        <span class="social-label">Facebook</span>
      </a>
      <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="X (Twitter)">
        <span class="social-icon">𝕏</span>
        <span class="social-label">X</span>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">
        <span class="social-icon">💼</span>
        <span class="social-label">LinkedIn</span>
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
        <span class="social-icon">📷</span>
        <span class="social-label">Instagram</span>
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
        <span class="social-icon">🐙</span>
        <span class="social-label">GitHub</span>
      </a>
      <a href="#" class="social-btn social-btn-soon" aria-label="YouTube Coming Soon">
        <span class="social-icon">▶️</span>
        <span class="social-label">YouTube <small>Soon</small></span>
      </a>
    </div>
  </div>
</section>

<section class="about-section about-cta">
  <div class="about-section-inner" style="text-align: center; max-width: 640px;">
    <h2>Thank You</h2>
    <p>Thank you for visiting Techtonz. Whether you're here to learn Python, master data analytics, explore AI, build machine learning projects, or discover new opportunities—I'm grateful you're part of this growing community.</p>
    <p class="welcome-line">Let's keep learning, building, and staying ahead—together.</p>
    <div class="hero-actions" style="justify-content: center; margin-top: 28px;">
      <a href="{{ '/blog/' | relative_url }}" class="btn-primary">Explore the blog →</a>
    </div>
  </div>
</section>
