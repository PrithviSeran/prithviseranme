# Design Guidelines: Personal Portfolio Website (Replit-Inspired)

## Design Approach
**Reference-Based**: Replit UI aesthetic - characterized by extreme simplicity, generous whitespace, clean typography, and functional minimalism. The design prioritizes content readability and ease of navigation over decorative elements.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, modern, highly readable
- **Heading Hierarchy**:
  - H1 (Name/Hero): text-5xl to text-6xl, font-bold
  - H2 (Section Titles): text-3xl to text-4xl, font-semibold
  - H3 (Project Titles): text-xl to text-2xl, font-medium
  - Body: text-base to text-lg, font-normal
  - Small Text: text-sm, font-normal

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, and 16 for consistency
- Section padding: py-16 md:py-24
- Container: max-w-5xl mx-auto px-6
- Card spacing: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8

## Page Structure

### Header/Navigation
- Fixed or sticky header at top
- Simple horizontal nav with name/logo on left
- Navigation links (About, Projects, Contact) on right
- Minimal height (h-16 to h-20)
- Subtle bottom border for separation

### Hero/Introduction Section
- Clean, text-focused introduction
- Name as primary heading
- 2-3 sentence tagline/description
- Simple CTA button ("View Projects" or "Get in Touch")
- No large background image - text-first approach matching Replit's minimalism
- Centered or left-aligned layout
- Ample whitespace (py-20 to py-32)

### Projects Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Project cards with:
  - Clean border (border with subtle treatment)
  - Padding: p-6
  - Project title (bold, prominent)
  - Brief description (2-3 lines max)
  - Tech stack tags (subtle, pill-shaped)
  - Links (GitHub, Live Demo) as simple text links or minimal buttons
  - Hover state: subtle border emphasis or slight elevation
- Consistent card heights for visual harmony

### About Section
- Single column, max-w-3xl for optimal reading
- Short bio (3-4 paragraphs)
- Skills/technologies list in simple grid or inline tags
- No elaborate graphics - text and whitespace focused

### Contact/Footer Section
- Minimal contact section with:
  - Email address
  - Social links (GitHub, LinkedIn, Twitter) as simple icons or text links
  - Optional: simple contact form (if included)
- Footer with copyright and minimal additional links
- Clean, uncluttered layout

## Component Library

### Cards
- Subtle borders, no heavy shadows
- Rounded corners: rounded-lg
- Clean internal spacing
- Minimal hover effects (subtle border change)

### Buttons
- Primary: Solid with subtle rounded corners (rounded-md)
- Secondary: Outline style
- Sizes: px-4 py-2 (small), px-6 py-3 (medium)
- Font weight: font-medium

### Links
- Underline on hover
- Simple transition
- No elaborate effects

### Icons
- **Library**: Heroicons (outline style for consistency with Replit aesthetic)
- Use sparingly - only for social links and essential UI elements
- Size: w-5 h-5 to w-6 h-6

## Images
**No Hero Image**: Following Replit's text-first approach, this design omits large hero imagery
**Project Thumbnails**: Optional small preview images in project cards (max height ~200px), maintaining minimal aesthetic

## Animations
- Minimal to none
- Simple transitions on hover states (150-200ms)
- No scroll-triggered animations
- Focus on instant, responsive feel

## Key Design Principles
1. **Whitespace First**: Generous spacing between all elements
2. **Typography Hierarchy**: Clear visual hierarchy through size and weight only
3. **Functional Over Decorative**: Every element serves a purpose
4. **Consistent Spacing**: Strict adherence to spacing scale
5. **Minimal Borders**: Use subtle dividers sparingly
6. **Content Focus**: Design supports content, never overshadows it

## Responsive Behavior
- Mobile: Single column, increased vertical spacing
- Tablet: 2-column project grid
- Desktop: 3-column project grid, max-width container
- Maintain generous whitespace at all breakpoints