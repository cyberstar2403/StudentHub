# StudentHub

A responsive, multi-page student resource website built with HTML5, CSS3, and vanilla JavaScript.

## Run locally
1. Extract `StudentHub_Project.zip`.
2. Open the `StudentHub` folder.
3. Double-click `index.html` to open it in a modern browser.

No build step, package manager, backend, or API key is required. Google Fonts are loaded online when available; the site falls back to system sans-serif fonts offline.

## Pages
- `login.html` — Frontend-only demo sign-in
- `index.html` — Home
- `about.html` — About StudentHub
- `courses.html` — Course discovery, search, category filtering, expandable outlines
- `materials.html` — Searchable PDF library with six downloadable sample guides
- `tutorials.html` — Searchable tutorials with expandable lesson content
- `blog.html` — Article filtering and in-page reading interaction
- `study-tips.html` — Study methods and productivity advice
- `resources.html` — External educational and productivity resources
- `faq.html` — Accessible accordion FAQ
- `contact.html` — Client-side validated contact form

## Project structure
```text
StudentHub/
├── index.html
├── login.html
├── about.html
├── courses.html
├── materials.html
├── tutorials.html
├── blog.html
├── study-tips.html
├── resources.html
├── faq.html
├── contact.html
├── css/
│   ├── login.css
│   └── style.css
├── js/
│   ├── auth-guard.js
│   ├── login.js
│   └── main.js
├── assets/
│   └── images/ (locally stored student-learning photos)
├── documents/
│   ├── introduction-to-computer-science.pdf
│   ├── basic-mathematics.pdf
│   ├── introduction-to-programming.pdf
│   ├── study-skills.pdf
│   ├── web-development-basics.pdf
│   └── digital-literacy.pdf
└── README.md
```

## Functionality notes
- Mobile navigation toggles with an accessible expanded state.
- Courses, materials, tutorials, and journal entries support keyword search and category filtering.
- Course outlines and tutorial lessons expand inline.
- Journal articles open in a focused reading panel.
- FAQ items use an accessible single-open accordion.
- Contact and newsletter forms validate in the browser and show confirmation messages.
- Existing pages require a demo sign-in. Use any valid email address and a password of at least six characters; the session is kept in the current browser tab only. Use the **Sign out** button in the site navigation to clear it.
- **Frontend-only limitation:** this sign-in is a navigation gate, not real authentication. Credentials are not sent or stored, and it should not be used to protect sensitive content.
- **Frontend-only limitation:** contact messages and newsletter addresses are not transmitted or stored. A production site would require a secure backend or form service.
- External resource links open in a new tab.

## Design and accessibility
The shared stylesheet provides consistent typography, spacing, colour, responsive grids, focus states, and mobile breakpoints. Semantic landmarks, form labels, keyboard-accessible controls, and visible focus styling are included.

## Suggested presentation walkthrough
1. Show the navigation and responsive mobile menu.
2. Demonstrate course search and category filtering.
3. Download one PDF from the materials library.
4. Expand a tutorial and an FAQ answer.
5. Open an article from the journal.
6. Submit invalid and valid contact form values to demonstrate validation.

All sample articles, course outlines, tutorials, and PDFs are demonstration educational content. Sample learner reflections are explicitly labelled illustrative, not verified testimonials.


## Photography and image links
The student-learning photos are stored locally in `assets/images/`, so the images do not require a connection to the Pexels CDN. Each photo can be opened at full size from its local asset file. Pexels states that its photos are free for personal and commercial use under the Pexels License; review the current terms before publishing: https://www.pexels.com/license/

Photo sources used:
- `assets/images/group-study.jpeg` — Group study in a library: https://www.pexels.com/photo/a-group-of-students-sitting-in-a-library-and-studying-16420458/
- `assets/images/student-studying.jpeg` — Student studying with a laptop: https://www.pexels.com/photo/a-student-sitting-in-a-library-and-with-a-laptop-and-studying-16420237/
- `assets/images/focused-student.jpeg` — Focused student using a laptop: https://www.pexels.com/photo/student-using-laptop-in-library-8199257/
- `assets/images/study-partners.jpeg` — Two students with laptops: https://www.pexels.com/photo/college-students-with-laptops-inside-the-library-7777691/

Pexels license information: https://help.pexels.com/hc/en-us/articles/360042295174-What-is-the-license-of-the-photos-and-videos-on-Pexels
