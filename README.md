# vidIq Blog

This is a simple blog built with Next.js.

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/TechDan09/vidiqblog.git
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

## Tech Stack

- Next.js
- Tailwind CSS
- TypeScript
- React

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
src/
├── api/ - API routes
├── app/ - Pages and components
├── components/ - Reusable components
├── utils/ - Utility functions
└── types/ - TypeScript types
```

## Testing

This project uses the following testing tools:

- Jest
- React Testing Library

Tests are currently written for each component and function to ensure resilience. Tests are located in the same file as the component or function they are testing, this pattern is used to ensure that the tests are up to date with the code and to make it easier to find the tests for a given component or function.

To run the tests, use the following command:

```bash
npm test
```

## Project Overview & Major Features

This project is a blog built with Next.js 14 using the latest react server components and next app router features.

- The blog is built with a statically generated list of posts and a dynamic post page that is generated at build time using the `generateStaticParams` function which allows for a dynamic route to be generated for each post.

- Each blog post also has a structured schema using a custom `generateJsonLd` function to generate the JSON-LD for the post page. This allows for search engines to understand the content of the page and for social media to understand the content of the page.

- The blog also has a pagination system that is built with pagination for optimal performance rather than fetching all the posts at once, we currently fetch a default of 15 posts per page.

- Images are lazy loaded by default using next Image component but for cases where we have images above the fold such as on the blog detail page, we eager load the image to improve performance. We also do this on the blog list page for the first 6 posts, This is to ensure that the main content is loaded quickly and to improve the user experience and overall core web vitals.

- The blog posts pagination are done from the server side using the `searchParams` object to get the current page from the url and then fetching the posts for that page

- A sitemap is generated using nextjs `sitemap.ts` file, this helps search engines and crawlers understand the pages on the website and helps index the website.
