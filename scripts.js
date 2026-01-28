   /* Modal data & content */
const modalContent = {
  permesso: {
    title: '📋 Permesso di Soggiorno (Residence Permit)',
    content: `
      <p><strong>What is it?</strong></p>
      <p>A residence permit required for all international students staying in Italy longer than 90 days.</p>
      
      <p><strong>When to apply:</strong></p>
      <ul>
        <li>Within 8 days of arrival in Italy</li>
        <li>VSAM will guide you step-by-step</li>
      </ul>
      
      <p><strong>Documents needed:</strong></p>
      <ul>
        <li>Passport & visa</li>
        <li>University enrollment letter</li>
        <li>Proof of accommodation</li>
        <li>Health insurance</li>
        <li>Tax stamps (marca da bollo)</li>
      </ul>
      
      <p><strong>Need help?</strong> Contact VSAM and we'll walk you through the entire process!</p>
      <button class="contact-link-button" onclick="scrollToContactFromModal()">📩 Contact VSAM for Help</button>
    `
  },
  isee: {
    title: '💰 ISEE Certificate',
    content: `
      <p><strong>What is ISEE?</strong></p>
      <p>ISEE (Indicatore della Situazione Economica Equivalente) is a document that shows your family's economic situation. It's used to determine your university tuition fees and scholarship eligibility.</p>
      
      <p><strong>Why you need it:</strong></p>
      <ul>
        <li>Reduce tuition fees (can be €0 - €2,000 based on ISEE)</li>
        <li>Apply for ERSU scholarship</li>
        <li>Access student discounts</li>
      </ul>
      
      <p><strong>How VSAM helps:</strong></p>
      <ul>
        <li>Guide you through the CAF application</li>
        <li>Help prepare required documents</li>
        <li>Translate and explain the process</li>
      </ul>
      
      <p><strong>Important:</strong> Apply early! ISEE processing takes time.</p>
      <button class="contact-link-button" onclick="scrollToContactFromModal()">📩 Contact VSAM for Help</button>
    `
  },
  insurance: {
    title: '🏥 Health Insurance in Italy',
    content: `
      <p><strong>Two options available:</strong></p>
      
      <p><strong>1. Italian National Health Service (SSN) - UPDATED 2025</strong></p>
      <ul>
        <li>Cost: Around €150/year for students</li>
        <li>Covers: Doctor visits, hospital, emergency</li>
        <li>How to apply: Register at ASP (Azienda Sanitaria Provinciale)</li>
      </ul>
      
      <p><strong>2. Poste Vivere Protetti Insurance</strong></p>
      <ul>
        <li>Private insurance option</li>
        <li>Can be purchased at any Post Office</li>
        <li>Good for initial arrival period</li>
      </ul>
      
      <p><strong>VSAM recommendation:</strong> Get Poste insurance first (for permesso), then switch to SSN for better coverage.</p>
      
      <p><strong>Need detailed guidance?</strong> Contact us for step-by-step help!</p>
      <button class="contact-link-button" onclick="scrollToContactFromModal()">📩 Contact VSAM for Help</button>
    `
  },
  ersu: {
    title: '🎯 ERSU Regional Scholarship',
    content: `
      <p><strong>What is ERSU?</strong></p>
      <p>ERSU (Ente Regionale per il Diritto allo Studio Universitario) is a regional scholarship program that provides financial support to students.</p>
      
      <p><strong>What you can get:</strong></p>
      <ul>
        <li>Free accommodation in student residence</li>
        <li>Monthly allowance for living expenses</li>
        <li>Free meals at university cafeteria</li>
        <li>Total value: Up to €5,000-6,000 per year</li>
      </ul>
      
      <p><strong>Who can apply:</strong></p>
      <ul>
        <li>Students with low family income (based on ISEE)</li>
        <li>Must maintain good academic performance</li>
        <li>Both Italian and international students</li>
      </ul>
      
      <p><strong>Application period:</strong> Usually July-August each year</p>
      
      <p><strong>Need help applying?</strong> VSAM provides complete guidance for Vietnamese students!</p>
      <button class="contact-link-button" onclick="scrollToContactFromModal()">📩 Contact VSAM for Help</button>
    `
  },
  application: {
    title: '📝 How to Apply to University of Messina',
    content: `
      <p><strong>Step-by-step process:</strong></p>
      
      <p><strong>1. Choose your program</strong></p>
      <ul>
        <li>English-taught programs (no Italian required)</li>
        <li>Italian-taught programs (need B2 Italian certificate)</li>
      </ul>
      
      <p><strong>2. Prepare documents</strong></p>
      <ul>
        <li>High school diploma (translated & legalized)</li>
        <li>Academic transcripts</li>
        <li>Language certificate (English or Italian)</li>
        <li>Passport copy</li>
      </ul>
      
      <p><strong>3. Apply online</strong></p>
      <ul>
        <li>Through university website</li>
        <li>Submit required documents</li>
        <li>Pay application fee</li>
      </ul>
      
      <p><strong>4. Get pre-enrollment letter</strong></p>
      <p><strong>5. Apply for student visa at Italian Embassy</strong></p>
      
      <p><strong>Timeline:</strong> Start 6-8 months before academic year begins</p>
      
      <p><strong>Confused?</strong> Contact VSAM - we'll guide you through every step!</p>
      <button class="contact-link-button" onclick="scrollToContactFromModal()">📩 Contact VSAM for Help</button>
    `
  },
  community: {
    title: '🤝 Vietnamese Student Community in Messina',
    content: `
      <p><strong>You're not alone!</strong></p>
      
      <p><strong>VSAM (Vietnamese Students Association in Messina):</strong></p>
      <ul>
        <li>100+ Vietnamese students currently studying here</li>
        <li>Active Facebook community and support group</li>
        <li>Regular meetups and events</li>
        <li>Seniors help newcomers with everything</li>
      </ul>
      
      <p><strong>What we do:</strong></p>
      <ul>
        <li>Help with administrative procedures</li>
        <li>Answer questions about life in Messina</li>
        <li>Share apartments and roommate finding</li>
        <li>Organize Vietnamese cultural events</li>
        <li>Support with Italian language and studies</li>
      </ul>
      
      <p><strong>Why join VSAM?</strong></p>
      <ul>
        <li>Free guidance from experienced students</li>
        <li>Make Vietnamese friends in Italy</li>
        <li>Get practical tips for daily life</li>
        <li>Access to shared resources and guides</li>
      </ul>
      
      <p><strong>Join our community:</strong></p>
      <a href="https://www.facebook.com/hsvvn.messina" target="_blank" class="contact-link-button" style="display: inline-block; text-decoration: none; text-align: center;">
        📘 Follow VSAM on Facebook
      </a>
      <button class="contact-link-button" onclick="scrollToContactFromModal()" style="margin-top: 10px;">
        📩 Contact VSAM for Help
      </button>
    `
  },
};

 /* Global variables*/
let currentSlide = 0;


 /* Modal & scroll function */
// Open modal
function openModal(type) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const data = modalContent[type];

  if (data) {
    modalBody.innerHTML = '<h3>' + data.title + '</h3>' + data.content;
    modal.classList.add('active');
    modal.style.display = 'block'; // Ensures visibility
  } else {
    console.error('No content found for type:', type);
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

// Scroll to contact and close modal
function scrollToContactFromModal() {
  closeModal();
  setTimeout(function () {
    const contactSection = document.getElementById('contact') || document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);
}

// Scroll to contact (direct link)
function scrollToContact() {
  const contactSection = document.getElementById('contact') || document.getElementById('contact-section');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

 /* Form handling */
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  console.log('Form submitted:', { name, email, phone, message });

  const successMessage = document.getElementById('successMessage');
  if (successMessage) {
    successMessage.classList.add('show');
    event.target.reset();
    setTimeout(function () {
      successMessage.classList.remove('show');
    }, 5000);
  }
}

 /* Initialization */
document.addEventListener('DOMContentLoaded', function () {

  // -- Mobile Menu Setup --
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('active');
    });

    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
      });
    });
  }

  // FAQ Accordion Functionality
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.onclick = function () {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });
});

// 1. Close modal when press ESC
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    closeModal();
    if (typeof closeLightbox === "function") closeLightbox();
  }
});

// 4. Close modal when click outside (Overlay)
window.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // close menu when choose section
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});
