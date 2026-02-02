# Learning AI Blog

A React SPA blog about learning AI, powered by Contentful CMS.

## Quick Start

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file:
```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
```

Without credentials, the app uses mock data for development.

## Tech Stack

- React 18 + React Router
- Vite (build tool)
- Contentful CMS (headless)
- Fira Code font

## Contentful Static Content Types

These content types should have **only one instance** in Contentful (singleton pattern).

### heroSection

Main homepage hero section content.

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| `title` | Short text | Yes | - | Main heading |
| `subtitle` | Long text | No | - | Description text below title |
| `siteTitle` | Short text | No | 60 | SEO page title (used in `<title>` tag) |
| `siteDescription` | Short text | No | 160 | SEO meta description |
| `socialImage` | Asset (image) | No | - | Open Graph/social share image |

### footer

Site-wide footer content.

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| `copyright` | Short text | No | - | Copyright text (e.g., "© 2024 My Blog") |
| `tagline` | Short text | No | - | Footer tagline or slogan |

### siteSettings

Global site configuration and UI text strings.

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| `logoText` | Short text | Yes | - | Header logo text (top-left) |
| `heroBadgeText` | Short text | No | - | Badge text displayed in hero section |
| `backToPostsText` | Short text | No | - | Text for "Back to posts" link |
| `backToHomeText` | Short text | No | - | Text for "Back to home" button |
| `notFoundTitle` | Short text | No | - | 404 page heading |
| `notFoundMessage` | Long text | No | - | 404 page message text |
| `loadingText` | Short text | No | - | Loading state text |
| `defaultSiteTitle` | Short text | No | 60 | Default SEO title (fallback) |
| `defaultSiteDescription` | Long text | No | 160 | Default SEO description (fallback) |
| `contactEmail` | Short text | No | - | Contact email address |
| `githubUrl` | Short text | No | - | GitHub profile URL |
| `linkedinUrl` | Short text | No | - | LinkedIn profile URL |
| `twitterUrl` | Short text | No | - | Twitter profile URL |

### resumePage

Resume page content and structure.

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| `fullName` | Short text | Yes | - | Full name displayed in header |
| `location` | Short text | No | - | City, State |
| `phone` | Short text | No | - | Phone number |
| `email` | Short text | No | - | Email address |
| `linkedinUrl` | Short text | No | - | LinkedIn profile URL |
| `portfolioUrl` | Short text | No | - | Portfolio website URL |
| `professionalSummary` | Long text | No | - | Summary/objective paragraph |
| `keyAchievements` | Long text | No | - | Newline-separated list of achievements |
| `experience` | Long text | No | - | JSON array of job objects (see format below) |
| `technicalSkills` | Long text | No | - | JSON array of skill category objects (see format below) |
| `education` | Long text | No | - | Education details text |
| `certifications` | Long text | No | - | Newline-separated list of certifications |
| `pdfUrl` | Short text | No | - | URL to downloadable PDF resume |
| `seoTitle` | Short text | No | 60 | SEO page title |
| `seoDescription` | Short text | No | 160 | SEO meta description |

**Experience JSON Format:**
```json
[
  {
    "title": "Job Title",
    "company": "Company Name",
    "period": "Jan 2020 - Present",
    "description": "Job description and responsibilities"
  }
]
```

**Technical Skills JSON Format:**
```json
[
  {
    "category": "Languages",
    "skills": ["JavaScript", "Python", "Go"]
  },
  {
    "category": "Frameworks",
    "skills": ["React", "Node.js", "Django"]
  }
]
```

### contactPage

Contact page content.

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| `pageTitle` | Short text | Yes | - | Main page heading |
| `pageSubtitle` | Short text | No | - | Subtitle below heading |
| `seoTitle` | Short text | No | 60 | SEO page title |
| `seoDescription` | Short text | No | 160 | SEO meta description |
| `introText` | Long text | No | - | Introduction paragraph text |

## Repeating Content Types

These content types can have multiple instances:

- **blogPost** - Individual blog posts with title, slug, content, tags, images
- **tag** - Post tags/categories with name and slug

For full documentation on all content types, see [CLAUDE.md](./CLAUDE.md).

## Routes

- `/` - Home (hero + post list)
- `/post/:slug` - Individual blog post
- `/resume` - Resume page
- `/contact` - Contact page

## Features

- SEO optimized (meta tags, Open Graph, Twitter Cards)
- Responsive design (mobile-first)
- Dark/light mode toggle
- Sticky header with navigation
- Animated hero section
- Post cards with featured images
- Loading skeletons
- Smooth transitions

## Development

For complete project structure and development conventions, see [CLAUDE.md](./CLAUDE.md).
