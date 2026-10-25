# Project Media Directory (GIFs & Screenshots)

Drop your project demo media files (`.gif`, `.webp`, `.png`, or `.jpg`) in this directory.

---

## Recommended Filenames

| Project ID | Recommended Filename | Description |
| :--- | :--- | :--- |
| `ocs-document-tracker` | `ocs-document-tracker.gif` | OCS Document Tracking, QR generation, status lookup flow |
| `graduation-audit` | `graduation-audit.gif` | Curricular checklist evaluation & graduation clearance engine |
| `prerequisite-waiver` | `prerequisite-waiver.gif` | Prerequisite waiver approval & slot endorsement workflow |
| `logistics-engine` | `logistics-engine.gif` | Commercial logistics dashboard & dispatch tracking |
| `saas-scheduler` | `saas-scheduler.gif` | Client booking calendar & intake workflow demo |
| `retail-pos` | `retail-pos.gif` | Cloud restaurant POS & kitchen display system |

---

## Best Practices for Recording Demo GIFs

1. **Keep it Short**: 6 to 10 seconds in a smooth continuous loop.
2. **Show Real Action**:
   - Cursor fills a field or clicks an action button (e.g. *Track Document*, *Evaluate Checklist*, *Approve Waiver*).
   - Shows the immediate response (e.g. *status badge changes to Approved*, *modal pops up*, or *QR code is generated*).
3. **Avoid Jittery Zooms**: Keep the viewport steady. Zooming in and out rapidly can cause motion sickness.
4. **File Size**: Aim for under `2.5MB` per GIF (or export as animated `.webp` for ultra-crisp quality at half the file size).
5. **Free Recording Tools**:
   - [ScreenToGif](https://www.screentogif.com/) (Windows, lightweight, built-in crop and frame editor).
   - [ShareX](https://getsharex.com/) (High quality GIF / MP4 screen recorder).

---

## How It Works in `index.html`

The portfolio automatically searches for each file in this folder:
```html
<img src="assets/screenshots/ocs-document-tracker.gif" 
     alt="OCS Document Tracker Interface" 
     class="project-media"
     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
```
- If the file exists in `assets/screenshots/`, it displays immediately.
- If the file has not been added yet, it displays a clean, minimal hint container telling you which filename to drop in.
