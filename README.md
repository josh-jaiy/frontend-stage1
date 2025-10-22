# Stage 1 Front‑End Project

This repository contains the implementation of the Stage 1 task, which extends a
previous single–page application into a multi‑page website. The goal was to
demonstrate an understanding of semantic HTML, client‑side form validation,
accessibility best practices and responsive design.

## Project Structure

The application is composed of three pages, each written using plain HTML,
CSS and a small amount of JavaScript:

| File | Description |
| --- | --- |
| **index.html** | The home page introduces the project. It contains a simple card component and navigation links to the other pages. |
| **contact.html** | Contains a contact form with fields for full name, email, subject and message. All fields are required, the email is validated against a simple pattern, and the message must be at least 10 characters long. Accessible error messages are surfaced via ARIA attributes and announced by screen readers. A success message appears after successful submission. |
| **about.html** | A reflective page divided into five sections: biography, programme goals, areas of low confidence, a note to my future self and extra thoughts. Each section is wrapped in a `<section>` element and annotated with a `data-testid` attribute for automated testing. |
| **styles.css** | Global styles shared across all pages. This file defines the colour palette, typography, layout rules, responsive adjustments using media queries, and error/success styles used by the contact form. |
| **script.js** | Handles client‑side validation of the contact form. It sets `aria-invalid` and `aria-describedby` when errors occur, displays role‑based alerts for screen readers and shows a live region for the success message. |

## Accessibility and Semantic HTML

Accessibility was a primary concern in this project. Each form control is
associated with its label using the `for` attribute, making the relationship
between labels and inputs clear for screen‑reader users. The MDN documentation
emphasises that explicitly associating a `<label>` with an `<input>` via a
matching `id` improves the user experience because screen readers announce
the label when the field gains focus【178030392128311†L249-L266】. All headings and
text content are marked up with appropriate semantic elements so that the
document structure is meaningful to assistive technologies, following the
guidance that using semantic HTML gives browsers built‑in accessibility hooks
【506031616900024†L182-L199】. Error messages in the contact form are connected
to their corresponding inputs using the `aria-describedby` attribute and are
announced with `role="alert"` to meet recommendations for accessible form
validation【235812937383893†L118-L156】. When a field is invalid, `aria-invalid`
is set to `true`, ensuring that screen readers communicate the error state
【235812937383893†L118-L152】.

## Responsive Design

The layout is responsive across a range of devices. Media queries in
`styles.css` adjust the navigation spacing and form layout at `600px` and
`768px` breakpoints. On small screens the contact form fields stack
vertically; on larger screens they are arranged in two columns. These
breakpoints were chosen to provide comfortable reading widths across phones,
tablets and desktops. The site remains usable with only the keyboard and
supports standard focus outlines.

## Running Locally

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   cd frontend-stage1
   ```

2. Open `index.html` in your preferred browser. No build step is required,
   since the project uses plain HTML, CSS and JavaScript.

## Deployment

You can host the application using GitHub Pages, Netlify or any static site
hosting provider. For example, to deploy to GitHub Pages:

1. Commit your changes and push the repository to GitHub.
2. Navigate to the repository’s **Settings** → **Pages** section.
3. Select the `main` branch and the root folder (`/`) as the source and
   click **Save**.
4. After a few moments GitHub will provide a URL where the site is
   available. Use this URL as your live demo when submitting your work.

Alternative static hosting platforms such as Netlify and Vercel offer drag‑and
drop deployments for projects of this nature.

## Acknowledgements

Guidance on semantic HTML and accessibility was informed by articles from
MDN and W3C. The importance of linking form labels to inputs with
`for`/`id` pairs【178030392128311†L249-L266】, using semantic sectioning
elements【506031616900024†L182-L213】 and associating error messages via ARIA
attributes【235812937383893†L118-L156】 has been incorporated throughout the
application.