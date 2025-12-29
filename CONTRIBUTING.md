# Contributing Guidelines

Standards and best practices for this codebase.

## Code Review Checklist

### ✅ General

- [ ] Code follows existing patterns and conventions
- [ ] No commented-out code (remove or explain)
- [ ] No console.logs or debugging statements
- [ ] TypeScript types properly defined (no `any` unless necessary)
- [ ] No unused imports
- [ ] Build succeeds: `npm run build`
- [ ] Type checking passes: `npm run typecheck`
- [ ] Linting passes: `npm run biome:check`
- [ ] Changes tested locally

### ✅ Styling & Tailwind

- [ ] Uses Tailwind v4 utilities (no inline styles)
- [ ] Uses theme utilities (`bg-body`, `text-primary`, etc.)
- [ ] Container queries (`@md:`) for components
- [ ] Viewport queries (`md:`) only for page layouts
- [ ] Arbitrary variants instead of CSS modules (when appropriate)
- [ ] Logical properties (`ps-*`, `ms-*`) for RTL support
- [ ] No hardcoded colors
- [ ] Works in both light and dark themes

### ✅ Components

- [ ] Properly typed with TypeScript
- [ ] Clear, descriptive prop names
- [ ] Single Responsibility Principle
- [ ] Accessibility attributes (ARIA labels, semantic HTML)
- [ ] Reusable and not tightly coupled

### ✅ MDX & Content

- [ ] Required frontmatter: `type`, `published`, `lang`, `title`, `desc`, `date`, `tags`
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Code blocks have language specified

### ✅ Performance

- [ ] Images optimized (Gatsby Sharp)
- [ ] No unnecessary re-renders
- [ ] GraphQL queries optimized (only needed fields)
- [ ] Large dependencies lazy-loaded

---

## Styling Guidelines

### Theme Utilities

**Always use theme utilities instead of hardcoded colors:**

- Backgrounds: `bg-body`, `bg-nav`, `bg-bq`, `bg-table-head`, `bg-table-even`, `bg-table-odd`
- Text: `text-primary`, `text-secondary`, `text-accent-primary`, `text-accent-hover`, `text-accent-active`, `text-accent-visited`
- Borders: `border-primary`, `border-secondary`, `border-table`
- Rings: `ring-accent-primary`, `ring-offset-body`
- Decorations: `decoration-accent-primary`, `decoration-accent-hover`
- Fonts: `font-sans` (UI elements), `font-serif` (body text), `font-mono` (code)

### Container vs Viewport Queries

- **Container queries** (`@md:`, `@lg:`) - For reusable components
- **Viewport queries** (`md:`, `lg:`) - For page-level layouts only

```tsx
// Components
<section className="@container">
  <Card className="@md:flex @md:items-center" />
</section>

// Page layouts
<main className="md:grid md:grid-cols-2">
```

### Arbitrary Variants vs CSS Modules

**Use arbitrary variants for:**

- Simple state-based styling (`peer-checked:`, `group-hover:`)
- Single-level pseudo-selectors (`[&::before]:`, `[&:hover]:`)

**Use CSS modules for:**

- Deep nested selectors (3+ levels)
- Complex nth-child patterns
- Framework-specific class targeting (`.gatsby-resp-image-wrapper`)
- Global scoped styles

### Logical Properties (RTL Support)

Use logical properties for bidirectional text support:

- `ps-*` (padding-inline-start) instead of `pl-*`
- `pe-*` (padding-inline-end) instead of `pr-*`
- `ms-*` (margin-inline-start) instead of `ml-*`
- `me-*` (margin-inline-end) instead of `mr-*`
- `border-s-*` instead of `border-l-*`

### Arbitrary Properties

For CSS properties without Tailwind utilities:

```tsx
<div className="[unicode-bidi:bidi-override]">
```

---

## Component Guidelines

### TypeScript

- Define and export props interfaces
- No `any` types without justification
- Use proper generic types

### Accessibility

- Use semantic HTML (`button`, `nav`, `article`, not `div onClick`)
- ARIA labels for icon-only buttons
- Mark decorative elements with `aria-hidden="true"`
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Ensure keyboard navigation works

### GraphQL

- Use fragments to avoid duplication
- Fetch only needed fields
- Filter and sort at query level (not in JS)

---

## Performance Guidelines

- Use Gatsby Image plugin for images
- GraphQL queries: fetch only needed fields
- Lazy load large components with `React.lazy()`
- Code-split large dependencies

---

## Creating a New Component

1. Create component file in appropriate directory
2. Define TypeScript interface for props
3. Use Tailwind theme utilities
4. Add accessibility attributes
5. Export as default
6. Add JSDoc comments if complex

---

## Adding MDX Content

Required frontmatter:

```yaml
type: "blog"
published: true
lang: "en"
title: "Post Title"
desc: "Brief description"
date: "2025-01-20"
tags:
  - "tag1"
  - "tag2"
hasReview: true
```

---

## Pre-Commit Checklist

- [ ] `npm run typecheck` passes
- [ ] `npm run biome:check` passes
- [ ] `npm run build` succeeds
- [ ] Tested in light and dark themes
- [ ] Tested on mobile viewport (if UI changes)
- [ ] No breaking changes for existing content

---

## Resources

- [Tailwind v4 Documentation](https://tailwindcss.com/docs)
- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [MDX Documentation](https://mdxjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
