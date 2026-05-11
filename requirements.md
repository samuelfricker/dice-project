# DICE Project Webpage Requirements Specification

## 1. Project Context
* **Project Title:** Digital Inclusion through Cybersecurity and Ethical AI (DICE)
* **Project Code:** 2025-1-DE02-KA210-VET-000358948
* **Funding Program:** Erasmus+ KA210-VET
* **Total Grant:** 60,000.00 EUR

## 2. Partnership (Consortium)
The webpage must feature a dedicated section highlighting the participating organizations, their roles, logos, and links to their respective websites:
* **cyberGEIGER GmbH** (Germany) – Project Coordinator / Applicant
* **SOCIETA' COOPERATIVA A.FO.RI.S.MA.** (Italy) – Partner
* **Humaniti AI Solututions EOOD** (Bulgaria) – Partner

## 3. Core Structure & Content Pages
* **Home / About the Project:** An overview explaining the mission of the DICE project (promoting Digital Inclusion through Cybersecurity and Ethical AI).
* **Partnership:** Profiles of the consortium members.
* **News & Updates / Dissemination:** A blog or news feed to post project milestones, share social media feeds, and announce upcoming events (fulfilling the "Social media outreach and dissemination" budget item).
* **E-Learning Platform Integration:** The project features a "DICE E-learning platform" which represents the primary budget allocation. The website must either host this platform or serve as a prominent gateway with clear calls-to-action (CTAs) and course catalogues linking to an external LMS.

## 4. Footer UI & Compliance Requirements
A global footer must be present on all pages of the website. It must incorporate the mandatory funding requirements and follow modern UI design best practices:

**4.1 Visual Hierarchy & Layout**
* **Grid Structure:** A 3-column grid layout is required, with generous whitespace around the entire footer, between columns, and list items to ensure information is highly scannable.
* **Columns & Headings:**
  * **"Contact":** Includes the project logo (`public\DICE-2-logo.svg`) and the primary project contact email (`contact@dice-project.org`).
  * **"Funding":** Serves as social proof and includes the official "Co-funded by the European Union" emblem/flag and the standard EU disclaimer: *"Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them."*
  * **"Social Media":** Active links opening securely in new tabs to the project's dissemination channels (LinkedIn, Bluesky, X, Instagram, Facebook, YouTube).

**4.2 Color & Contrast**
* **Visual Separation:** Use a distinct background color (e.g., dark charcoal, deep navy, or a soft brand-colored pastel) to signal the "end" of the page that contrasts completely with the main body.
* **Accessibility (WCAG):** Ensure high contrast for text against the background. For dark backgrounds, use off-white or light gray text instead of pure white to reduce eye strain.

**4.3 Typography**
* **Sizing:** Text should be legible but slightly smaller than main body text (typically `14px` to `16px`).
* **Link Hover States:** Links must behave predictably with subtle color changes, shifts, or underlines upon hover to indicate interactivity.

**4.4 Branding & Trust Elements**
* **Brand Presence:** The project logo (`public\DICE-2-logo.svg`) must be displayed in the "Contact" column. (In dark footers, a monochromatic or grayscale logo is preferred for a cleaner look).
* **Social Proof:** Achieved entirely through the "Funding" section via the EU acknowledgment and emblem.
* **Social Icons:** Icons should be kept tidy and placed in a horizontal row using minimalist vector icons (SVG format) rather than fully colored brand images.

**4.5 Essential Elements**
* **Primary Focus:** Contact email (`contact@dice-project.org`) takes priority. No newsletter signup CTA is needed.
* **Link Structure:** No sitemap or quick links are required in the footer.
* **Sub-footer ("The Boring Stuff"):** A distinct, thinner sub-footer row at the very bottom containing the copyright notice (e.g., `© 2024 DICE Project. All rights reserved.`), Privacy Policy, and Terms of Service links.

**4.6 Mobile Responsiveness**
* **Stacking:** On mobile screens, the horizontal columns must gracefully stack vertically.

## 5. Accessibility and "Digital Inclusion"
As the project's core theme is "Digital Inclusion," the website must adhere strictly to modern accessibility standards:
* **WCAG 2.1 AA Compliance:** High contrast modes, scalable text, semantic HTML, and proper ARIA labels for screen-reader compatibility.
* **Responsive Design:** Flawless usability and optimized layouts across mobile, tablet, and desktop devices.
* **Multilingual Support (i18n):** The website content should support multiple languages. Recommended languages include English (Lingua Franca) along with the partners' native languages: German, Italian, and Bulgarian.

## 6. Technical Specifications
* **Framework:** Astro (Static Site Generation for fast load times, excellent SEO, and built-in i18n support).
* **Content Management:** Markdown/MDX or Content Collections for easy updates to news, blogs, and partner profiles.

## 7. Legal & Privacy Policy Requirements
Because the project is funded by the EU (Erasmus+ KA210-VET) and involves partners in Germany, Italy, and Bulgaria, the website must comply with the General Data Protection Regulation (GDPR) and specific national laws, such as the German Telemediengesetz (TMG) for the Imprint.

### 7.1 Required Components
* **Imprint (Impressum):** Mandatory for the German coordinator (cyberGEIGER GmbH). Must include company details, registration (728288), VAT ID (DE359487719), and representative contact.
* **Privacy Policy Page:** Must outline data collection, processing, and user rights (GDPR).
* **Data Controller:** cyberGEIGER GmbH acts as the main controller.
* **Data Sharing:** Must mention sharing with consortium partners SOCIETA' COOPERATIVA A.FO.RI.S.MA. (Italy) and Humaniti AI Solututions EOOD (Bulgaria).
* **Cookie Banner:** Required if any non-essential cookies (like analytics) are used.

### 7.2 Proposed Privacy Policy Text
The following text should be adapted and published on the website's Privacy Policy page:

**1. General Information and Data Controller**
The entity responsible for data processing on this website (Data Controller) is:
**cyberGEIGER GmbH**
Blücherstr. 19, 79110 Freiburg, Germany
Registration: 728288
Contact: contact@dice-project.org

**2. Data Collection on Our Website**
When you visit our website, your device automatically transmits certain technical data to our servers (e.g., IP address, browser type, operating system, time of access). This data is collected solely for the technical provision and security of the website (Art. 6(1)(f) GDPR).

**3. Data Sharing within the Consortium**
The DICE project (Project Code: 2025-1-DE02-KA210-VET-000358948) is a collaborative effort. Any personal data submitted voluntarily (e.g., via contact forms) may be shared among the project partners for the purpose of managing the project and answering your inquiries:
* SOCIETA' COOPERATIVA A.FO.RI.S.MA., Italy
* Humaniti AI Solututions EOOD, Bulgaria

**4. E-Learning Platform**
Accessing the DICE E-learning platform may require separate registration. The processing of data on the learning platform is governed by a separate privacy notice provided upon registration.

**5. Your Rights (GDPR)**
Under the GDPR, you have the right to request access to, rectification, or erasure of your personal data. You also have the right to restrict or object to processing, as well as the right to data portability. To exercise these rights, please contact us at contact@dice-project.org. You also have the right to lodge a complaint with a supervisory authority.

### 7.3 Terms of Service Requirements
The Terms of Service (ToS) must govern the use of the DICE project website and outline the conditions for accessing the E-Learning platform, reflecting the non-commercial and EU-funded nature of the project.

**Required Components:**
* **Provider Identification:** Clearly state cyberGEIGER GmbH as the coordinator and provider, along with the project consortium (SOCIETA' COOPERATIVA A.FO.RI.S.MA. and Humaniti AI Solututions EOOD).
* **Scope of Service:** Define that the website provides information on the DICE project and access to the E-Learning platform.
* **EU Funding Disclaimer:** Include a disclaimer that the project is funded by the European Union and the EU is not liable for the content.
* **Intellectual Property:** State the copyright terms for the project materials and e-learning content.
* **Liability:** Limit liability for external links and uninterrupted access to the platform.

### 7.4 Proposed Terms of Service Text
The following text should be adapted and published on the website's Terms of Service page (`/terms`):

**1. General**
These Terms of Service govern your use of the DICE (Digital Inclusion through Cybersecurity and Ethical AI) project website, coordinated by cyberGEIGER GmbH (Blücherstr. 19, 79110 Freiburg, Germany) in partnership with SOCIETA' COOPERATIVA A.FO.RI.S.MA. (Italy) and Humaniti AI Solututions EOOD (Bulgaria).

**2. Services Provided**
The website serves as a central information hub for the Erasmus+ funded DICE project (Project Code: 2025-1-DE02-KA210-VET-000358948) and provides access to our E-Learning platform. All resources are provided free of charge for educational and informational purposes.

**3. Intellectual Property**
Unless otherwise stated, the content created by the DICE project consortium is subject to copyright. As an EU-funded educational initiative, many resources may be available under open licenses, which will be explicitly indicated where applicable.

**4. E-Learning Platform**
Accessing the E-Learning platform may require the creation of a user account. Users agree to provide accurate information and maintain the confidentiality of their credentials. The consortium reserves the right to suspend accounts that violate these terms or misuse the platform.

**5. Disclaimer of Liability**
The content of this website is maintained with care; however, the consortium assumes no liability for the accuracy, completeness, or timeliness of the provided information. We are not responsible for the content of external third-party websites linked from our site.

**6. EU Funding Disclaimer**
Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.