# 🎨 Graphic Design Showcase Section: Planning & Technical Assessment

**Target**: Create a dedicated showcase section in the portfolio highlighting graphic design and pubmat work produced for the **UPLB CFNR Office of the College Secretary (OCS)** since 2023.  
**Requirement**: Provide Facebook post URLs, display the designs, show the post dates, and link back to the official OCS CFNR Facebook page without manual image bloat.

---

## 1. ⚠️ Technical Reality Check: Fetching Directly from Facebook Links

Before writing code, it is critical to understand how Facebook handles external web requests and image linking:

### The Challenges with Direct Client-Side URL Scraping:
1. **CORS (Cross-Origin Resource Sharing) Block**:
   - A browser loading your portfolio cannot directly run `fetch('https://www.facebook.com/...')` via JavaScript. Facebook’s servers reject cross-origin requests from external websites for security and user privacy.
2. **Bot Detection & Login Walls**:
   - When external scrapers or proxy services attempt to read a Facebook post URL, Facebook frequently serves a login wall (`facebook.com/login`) instead of the post content. Third-party scrapers (like OpenGraph extractors) often pull the generic blue Facebook logo instead of your actual poster.
3. **Facebook CDN Signed URL Expiration (`fbcdn.net`)**:
   - Images hosted directly on Facebook's CDN have cryptographic expiration tokens attached (e.g., `?oh=...&oe=...`). Even if an image URL is retrieved, **Facebook expires direct image URLs after days or weeks**, resulting in broken images (`403 Forbidden`) across your portfolio.
4. **Meta oEmbed & Graph API Deprecations**:
   - Meta deprecated unauthenticated oEmbed endpoints. Using Meta’s official Graph API now requires a registered Meta Developer App, business verification, and token management, which cannot safely be placed on a public client-side static webpage without exposing secret keys.

---

## 2. 🛠️ Evaluation of Architectural Approaches

To make this section durable, high-performing, and beautiful, here are the 3 viable options:

| Criteria | Option A: Curated Manifest + Optimized Asset (Recommended) | Option B: Facebook Official Post Embed (SDK) | Option C: Hybrid Metadata Manifest + External Hosting |
| :--- | :--- | :--- | :--- |
| **How it works** | You paste the FB URL + date in a data file (`js/graphics-data.js`). The image is stored in `assets/graphics/`. | Paste FB URLs into `<div class="fb-post">` containers. Meta's JS SDK renders full FB cards. | Images hosted on permanent media CDN (GitHub Releases, Cloudinary, Imgur) with direct links. |
| **Visual Quality** | ⭐⭐⭐⭐⭐ Crisp, customized portfolio grid matching your botanical theme | ⭐⭐ Heavy Facebook iframe with FB headers, reactions, comments | ⭐⭐⭐⭐⭐ Custom portfolio grid |
| **Reliability** | **100% Guaranteed** (Zero broken links, works forever) | Medium (Subject to FB script updates and user ad/tracker blockers) | **High** (Permanent image URLs) |
| **Page Speed** | Instant loading, optimized webp/jpg | Heavy (1–3 MB of Facebook tracking scripts per page) | Fast |
| **Maintenance** | Save the graphic once when listing | Just paste the post URL | Upload graphic to cloud host, paste image link + FB link |

---

## 3. 💡 Recommended Strategy: Option A (The Curated Portfolio Registry)

### Why this is best:
- **Designers control presentation**: You get a sleek, high-fidelity gallery with full-screen lightboxes, filter pills (by Year: *2023, 2024, 2025, 2026* and Category: *Advisories, Freshmen Orientation, Guidelines, Events*).
- **Direct verification**: Every card features an official **"View Original on Facebook &rarr;"** button linking directly to the live post on the CFNR OCS page for authenticity.
- **Never breaks**: Even if Facebook modifies post privacy or CDN tokens, your portfolio remains 100% operational.

### Sample Data Structure (`js/graphics-data.js`):
```javascript
const GRAPHIC_DESIGNS = [
  {
    id: 'clearance-guide-2023',
    title: 'Semester Clearance & Enrollment Step-by-Step Guide',
    date: 'August 12, 2023',
    year: '2023',
    category: 'Infographic & Workflow',
    image: 'assets/graphics/2023_clearance_guide.png',
    fbUrl: 'https://www.facebook.com/uplbcfnr.ocs/posts/pfbid0...',
    caption: 'Visual advisory breaking down multistep advising and clearance endorsements for incoming forestry freshmen.'
  },
  // Add entries simply by adding post links, dates, and images
];
```

---

## 4. 🖼️ Section Layout & UI Design Proposal

```text
+-----------------------------------------------------------------------------------+
|  [Section Header]                                                                 |
|  Visual Communications & Graphic Design                                           |
|  Official publication materials, infographics, and advisories for UPLB CFNR OCS.  |
|                                                                                   |
|  [Filter Toolbar]                                                                 |
|  [All (18)]  [2023 (6)]  [2024 (8)]  [2025 (4)]  |  [Infographics]  [Advisories]  |
|                                                                                   |
|  [Masonry / Grid View]                                                            |
|  +--------------------+  +--------------------+  +--------------------+           |
|  | [Graphic Image]    |  | [Graphic Image]    |  | [Graphic Image]    |           |
|  |                    |  |                    |  |                    |           |
|  | [Aug 15, 2023]     |  | [Nov 03, 2023]     |  | [Jan 18, 2024]     |           |
|  | Title of Pubmat    |  | Title of Pubmat    |  | Title of Pubmat    |           |
|  | Category Pill      |  | Category Pill      |  | Category Pill      |           |
|  | [View on FB ->]    |  | [View on FB ->]    |  | [View on FB ->]    |           |
|  +--------------------+  +--------------------+  +--------------------+           |
+-----------------------------------------------------------------------------------+
```

---

## 5. 📋 Implementation Roadmap & Checklist

### Phase 1: Planning & Architecture Selection
- [ ] Align on data strategy (Confirm **Option A: Curated Manifest + Asset Storage** vs **Option B: Facebook Official Post Embeds**).
- [ ] Determine categories (e.g., *Student Advisories*, *Academic Calendars*, *Event Banners*, *Infographics*).
- [ ] Establish chronological range (e.g., August 2023 &ndash; Present).

### Phase 2: Asset Curation & Data Setup
- [ ] Create `assets/graphics/` directory for high-res pubmat exports.
- [ ] Gather Facebook post URLs and publication timestamps from the CFNR OCS page.
- [ ] Author `js/graphics-data.js` containing design titles, dates, categories, direct FB links, and image paths.

### Phase 3: Semantic Markup (`index.html`)
- [ ] Add `#graphics` section to navigation bar.
- [ ] Insert `<section class="graphics-section" id="graphics">` between Systems and Engineering Standards.
- [ ] Add category & year filter toolbar (`All`, `2023`, `2024`, `2025`, `2026`).
- [ ] Structure responsive grid for pubmat display cards with date badges, zoom buttons, and Facebook outbound links.

### Phase 4: CSS Design & Responsive Polish (`style.css`)
- [ ] Style pubmat cards matching the existing UPLB botanical design system (forest borders, badge pills, hover elevations).
- [ ] Implement responsive masonry or aspect-ratio grid (handling both portrait 4:5 social posts and 16:9 banners).
- [ ] Style year/date pill badges with subtle calendar icons.

### Phase 5: Interactivity & Lightbox (`js/graphics.js`)
- [ ] Implement dynamic rendering from `js/graphics-data.js`.
- [ ] Add year & category filter switching logic.
- [ ] Build a lightweight lightbox modal so visitors can zoom in and read high-resolution text on infographics.
- [ ] Include outbound link button on the modal opening the official post directly on Facebook in a new tab.

---

## 6. ❓ Questions to Align Before Proceeding

1. **Storage preference**: Are you comfortable placing the graphic files (or compressed web-optimized versions) in an `assets/graphics/` folder, or do you prefer external cloud hosting (e.g. Cloudinary / Google Drive / GitHub releases)?
2. **Post Embeds vs Custom Cards**: Do you prefer clean, modern portfolio cards with a lightbox zoom and a "View on Facebook" button, or Facebook's native embedded post widgets with FB comments/reactions?
3. **Volume**: Approximately how many designs are you planning to showcase from 2023 to the present?

