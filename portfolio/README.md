# Portfolio

## Steps
1. Define Your Goals
2. Decide the Structure
3. Choose the Technology Stack
4. Design the Layout
5. Develop the Website
6. Add Your Content
7. Test and Deploy

## Define Your Goals
I want this portfolio to showcase programming progects and my full-stack engineering skills. It should highlight projects, tasks, webistes, and jobs that I have done related to software engineering.
My target audience is potential clients.

## Define the Structure
My portfolio will include the following pages:
1. Home/Landing Page
    - Catchy headline
    - Brief introduction or tageline
    - A CTA button leading to your work or resume.
2. About Page
    - A short bio
    - Your skills and expertise
    - A professional photo
3. Portfolio/Projects
    - Showcase your work with descriptions, links or case studies.
    - Use visuals or demos where applicable.
3. Blog
    - Share insights, tutorials, or thoughts related to your field.
4. Contact Page
    - A contact form
    - Links to email and social profiles (e.g., LinkedIn, GitHub, Twitter)

## Choose the Technology Stack
- Frontend: I am using Reach.js for the frontend.
- Styling: I am using plain CSS for the styling.
- Hosting: I am using Github pages for the hosting.

## Design the Layout
### Tools
Will do the desigin on Figma and use the prototyping tool to test new featuers and see the layout of the page before building the live page.
### Desing Tips
1. Consistency
    - Use a consistent color palette and typography.
    - Choose clean modern fonts (e.g., Google Fonts).
2. Navigation
    - Simple and inuitive menu bar.
    - Fixed navbar for better UX.
3. Responsive Design
    - Ensure it looks great on desktops, tablets, and phones.
    - Use CSS Flexbox/Grid for layouts.
4. Focus on Your Work
    - Use large visuals for project showcases.
    - Keep text concise and to the point.

## Develop the Website
### File Structure
// TODO: create separate stylings for each page and the different components
portfolio/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── Header.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   └── Projects.js
│   ├── styles/
│   │   └── styles.css
│   ├── App.js
│   ├── index.js
├── package-lock.json
├── package.json
└── README.md

## Add Your Content
- Upload your projects with descriptions, links and visuals.
- Add professional photos and your bio.

## Develop the Website
1. Test your wesite on multiple devices and browsers.
2. Deploy it using GitHub Pages:
    npm run build
    git add .
    git commit -m "Deploy portfolio"
    git push origin main
