(() => {
  const slug = location.pathname.split('/').pop().replace(/\.html$/i, '');
  const pageName = document.querySelector('.service-breadcrumb [aria-current="page"]')?.textContent.trim() || 'Diagnostic Service';
  const catalog = [
    { slug: 'pathology', name: 'Pathology', desc: 'Routine and specialized laboratory testing with a focus on accuracy.', image: 'images/services/Pathology.png' },
    { slug: 'microbiology', name: 'Microbiology', desc: 'Microbiology investigations to support clear clinical decisions.', image: 'images/services/Microbiology.png' },
    { slug: 'bio-chemistry', name: 'Bio-Chemistry', desc: 'Biochemistry testing across a broad range of health needs.', image: 'images/services/bio_chemistry.jpg' },
    { slug: 'immuno-assay', name: 'Immuno Assay', desc: 'Immunoassay testing using modern diagnostic technology.', image: 'images/services/immuno_assay.jpg' },
    { slug: 'digital-x-ray', name: 'Digital X-Ray', desc: 'Digital X-ray imaging in a patient-friendly setting.', image: 'images/services/digital_xray.jpg' },
    { slug: 'ultrasound', name: 'Ultrasound', desc: 'Ultrasound imaging for a range of diagnostic needs.', image: 'images/services/ultrasound.jpg' },
    { slug: '2d-echo', name: '2D Echo', desc: 'Cardiac ultrasound imaging and evaluation.', image: 'images/services/2d_echo.jpg' },
    { slug: 'tmt', name: 'TMT', desc: 'Treadmill testing to assess cardiac response to exercise.', image: 'images/services/tmt.jpg' },
    { slug: 'endoscopy', name: 'Endoscopy', desc: 'Endoscopic diagnostic services in a supportive environment.', image: 'images/services/endoscopy.jpg' },
    { slug: 'genetic-testing', name: 'Genetic Testing', desc: 'Advanced molecular and genetic analysis.', image: 'images/services/genetic_testing.jpg' },
    { slug: 'ecg', name: 'ECG', desc: 'Electrocardiogram testing for cardiac assessment.', image: 'images/services/ecg.jpg' },
    { slug: 'fnac-biopsy', name: 'FNAC & Biopsy', desc: 'Tissue and cell sampling procedures for evaluation.', image: 'images/services/biopsy.jpg' },
    { slug: 'pap-smear', name: 'Pap Smear', desc: 'Cervical screening sample collection and testing.', image: 'images/services/pap.jpg' },
    { slug: 'eeg-ncs', name: 'EEG & NCS', desc: 'Neurodiagnostic testing including EEG and nerve conduction.', image: 'images/services/eeg.jpg' },
    { slug: 'antenatal-scans', name: 'Antenatal Scans', desc: 'Ultrasound services for antenatal care.', image: 'images/services/ultrasound.jpg' }
  ];
  const related = {
    pathology: ['microbiology', 'bio-chemistry', 'immuno-assay', 'genetic-testing'],
    microbiology: ['pathology', 'bio-chemistry', 'immuno-assay', 'genetic-testing'],
    'bio-chemistry': ['pathology', 'microbiology', 'immuno-assay', 'genetic-testing'],
    'immuno-assay': ['pathology', 'bio-chemistry', 'microbiology', 'genetic-testing'],
    'digital-x-ray': ['ultrasound', '2d-echo', 'tmt', 'ecg'],
    ultrasound: ['antenatal-scans', '2d-echo', 'digital-x-ray', 'endoscopy'],
    '2d-echo': ['ecg', 'tmt', 'ultrasound', 'digital-x-ray'],
    tmt: ['ecg', '2d-echo', 'ultrasound', 'digital-x-ray'],
    endoscopy: ['fnac-biopsy', 'pathology', 'microbiology', 'ultrasound'],
    'genetic-testing': ['pathology', 'microbiology', 'bio-chemistry', 'immuno-assay'],
    ecg: ['2d-echo', 'tmt', 'digital-x-ray', 'ultrasound'],
    'fnac-biopsy': ['pathology', 'microbiology', 'pap-smear', 'ultrasound'],
    'pap-smear': ['fnac-biopsy', 'pathology', 'ultrasound', 'microbiology'],
    'eeg-ncs': ['ecg', '2d-echo', 'tmt', 'ultrasound'],
    'antenatal-scans': ['ultrasound', 'pap-smear', 'pathology', 'microbiology']
  };
  // Examples below are drawn from the test lists already published in js/packages.js.
  const packageExamples = {
    pathology: ['CBC', 'FBS', 'PPBS', 'Lipid Profile', 'LFT', 'RFT', 'Thyroid Profile', 'Complete Urine Analysis'],
    'bio-chemistry': ['FBS', 'PPBS', 'Creatinine', 'Lipid Profile', 'LFT', 'RFT', 'HbA1c', 'Thyroid Profile'],
    'digital-x-ray': ['Chest X-Ray'],
    ultrasound: ['USG', 'USG Abdomen & Pelvis', 'USG Both Breast'],
    '2d-echo': ['2D Echo'],
    tmt: ['TMT'],
    ecg: ['ECG'],
    'pap-smear': ['Pap Smear Test']
  };

  const overview = document.querySelector('.service-overview-grid');
  if (overview && !overview.querySelector('.service-overview-image')) {
    const image = document.querySelector('.service-detail-visual img');
    if (image) {
      const figure = document.createElement('figure');
      figure.className = 'service-overview-image';
      const clonedImage = image.cloneNode();
      clonedImage.loading = 'lazy';
      clonedImage.alt = `${pageName} diagnostic service at GENX`;
      figure.append(clonedImage);
      const caption = document.createElement('figcaption');
      caption.innerHTML = '<span aria-hidden="true">✚</span> Modern diagnostic care, close to home';
      figure.append(caption);
      overview.prepend(figure);
    }
  }

  const overviewSection = overview?.closest('.service-content-section');
  if (overviewSection && !document.querySelector('.service-why-section')) {
    const benefits = [
      ['fa-microchip', 'Advanced technology', 'Modern diagnostic equipment and methods.'],
      ['fa-user-md', 'Experienced professionals', 'A trained team to guide your diagnostic visit.'],
      ['fa-bullseye', 'Accurate results', 'Careful processes support reliable test results.'],
      ['fa-award', 'Quality standards', 'Quality-focused laboratory and imaging practices.'],
      ['fa-heart', 'Patient-friendly care', 'Clear guidance throughout your visit.'],
      ['fa-hand-holding-usd', 'Affordable diagnostics', 'A broad range of diagnostic services in one centre.']
    ];
    const section = document.createElement('section');
    section.className = 'service-content-section service-why-section tinted';
    section.innerHTML = `<div class="container"><div class="service-section-heading"><div class="eyebrow">WHY CHOOSE GENX</div><h2>Care that keeps you informed.</h2><p>Our team brings diagnostic services and patient guidance together in one place.</p></div><div class="service-why-grid">${benefits.map(([icon, title, text]) => `<article class="service-why-card"><span><i class="fas ${icon}" aria-hidden="true"></i></span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div>`;
    overviewSection.after(section);
  }

  const prepEyebrow = [...document.querySelectorAll('.service-section-heading .eyebrow')].find(el => el.textContent.trim().toUpperCase() === 'BEFORE YOUR VISIT');
  if (prepEyebrow && packageExamples[slug] && !document.querySelector('.service-package-examples')) {
    const section = document.createElement('section');
    section.className = 'service-content-section service-package-examples';
    section.innerHTML = `<div class="container"><div class="service-section-heading"><div class="eyebrow">PACKAGE TEST EXAMPLES</div><h2>Tests listed in GENX packages</h2><p>These examples appear in the current GENX package information. The requested tests and preparation depend on your clinician&rsquo;s advice.</p></div><ul class="service-test-chips">${packageExamples[slug].map(test => `<li><i class="fas fa-check" aria-hidden="true"></i>${test}</li>`).join('')}</ul></div>`;
    prepEyebrow.closest('.service-content-section').before(section);
  }

  const stepGrid = document.querySelector('.service-steps');
  if (stepGrid && !stepGrid.dataset.refined) {
    const steps = [
      ['Book your test', 'Bring your referral or test details so the team can confirm what has been requested.'],
      ['Visit our diagnostic centre', 'Preparation and sample requirements depend on the specific test. Ask the team if anything is unclear.'],
      ['Complete your test', 'The team will guide you through the sample collection or procedure planned for your service.'],
      ['Receive and review your report', 'Ask about report timing and review the result with the clinician who requested the test.']
    ];
    stepGrid.innerHTML = steps.map(([title, text], index) => `<article class="service-step"><span>${String(index + 1).padStart(2, '0')}</span><h3>${title}</h3><p>${text}</p></article>`).join('');
    stepGrid.dataset.refined = 'true';
  }

  const relatedGrid = document.querySelector('.service-related');
  if (relatedGrid) {
    const cards = (related[slug] || []).map(itemSlug => catalog.find(item => item.slug === itemSlug)).filter(Boolean);
    relatedGrid.classList.add('service-related-cards');
    relatedGrid.innerHTML = cards.map(item => `<a class="service-related-card" href="services/${item.slug}.html"><img src="${item.image}" alt="" loading="lazy"><span class="service-related-copy"><b>${item.name}</b><small>${item.desc}</small><strong>Learn More <i aria-hidden="true">→</i></strong></span></a>`).join('');
  }

  const bottomCta = document.querySelector('.service-bottom-cta');
  if (bottomCta) {
    bottomCta.classList.add('service-gradient-cta');
    const heading = bottomCta.querySelector('h2');
    const description = bottomCta.querySelector('p');
    if (heading) heading.textContent = 'Your Health Deserves the Best Care.';
    if (description) description.textContent = `Need help with ${pageName}? Contact our team to ask about availability or request an appointment.`;
    const bookLink = bottomCta.querySelector('.btn');
    if (bookLink) bookLink.textContent = 'Book Your Test →';
    if (!bottomCta.querySelector('.service-cta-contact')) {
      const contactLink = document.createElement('a');
      contactLink.className = 'btn service-cta-contact';
      contactLink.href = 'contact.html';
      contactLink.textContent = 'Contact Us';
      bottomCta.append(contactLink);
    }
  }
})();
