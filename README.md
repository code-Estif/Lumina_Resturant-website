# Lumina Hospitality Website - Portfolio Update

![Lumina Preview](Preview.png)

This project has been updated to meet professional hospitality standards, focusing on accessibility, performance, and UX polish.

## Key Improvements

### 1. Design & UX
- **Hero Contrast**: Added a linear-gradient overlay to the hero section to ensure white text remains readable over any image.
- **CTA Polish**: Updated the Primary CTA to a sophisticated warm gold (`#c89a3a`) with hover shadows. Secondary CTAs are now cleanly outlined.
- **Menu UX**: implemented a staggered fade-in animation for menu items and a "No items found" state when filtering.
- **Booking Feedback**: Added a unique reservation ID (token) to the success message and a "confirm within 24 hours" microcopy line to build trust.

### 2. Accessibility & Semantics
- **Semantic HTML**: Proper use of `<main>`, `<nav>`, `<article>`, and `<header role="banner">`.
- **Form Labels**: Every input now has a corresponding `<label for="...">` and `aria-describedby` links for error messages.
- **Image Optimization**: All images now have descriptive `alt` tags and `loading="lazy"` attributes to improve performance and SEO.
- **Focus States**: Added high-contrast `:focus-visible` styles for keyboard navigation.

### 3. Functional Logic (Vanilla JavaScript)
- **Validation**:
    - Name: Minimum 3 characters.
    - Phone: Regex validation (7-15 digits, allows `+`).
    - Date: Prevents selection of past dates.
    - Submit Button: Disabled until all fields are valid.
- **Persistence**: Bookings are saved to `localStorage` as an array of objects.

## LocalStorage Object Format
```json
{
  "id": "LUM-123456",
  "name": "Jane Doe",
  "phone": "+1234567890",
  "date": "2026-05-20",
  "guests": "4",
  "time": "19:30",
  "created_at": "2026-02-02T17:55:00.000Z"
}
```

## Files to Replace
To update your project, please replace the following files with the new versions provided:
1. `style.css`
2. `main.js`
3. `menu.js`
4. `booking.js`
5. `index.html`
6. `menu.html`
7. `booking.html`
8. `services.html` (Minor accessibility updates applied)
9. `contact.html` (Minor accessibility updates applied)