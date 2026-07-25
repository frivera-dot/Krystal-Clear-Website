// Job-site photo gallery.
// HOW TO ADD PHOTOS (when Fidel sends them):
//   1. Drop optimized images into /public/gallery/  (e.g. strip-wax-after-01.jpg;
//      landscape, ~1600px wide, <300KB each)
//   2. Add an entry per photo below. The homepage gallery section renders
//      automatically as soon as this array has items — no other changes needed.

export interface GalleryImage {
  /** Path under /public, e.g. "/gallery/strip-wax-after-01.jpg" */
  src: string;
  alt: string;
  /** Short mono caption shown under the frame, e.g. "VCT strip & wax — after · Walnut Creek office" */
  caption: string;
}

// NOTE: current entries are licensed STOCK PLACEHOLDERS (Pexels, free
// commercial license) — replace with the client's real job-site photos
// as they arrive. Keep captions honest: describe the service, never claim
// a specific job site until the photo is really ours.
export const gallery: GalleryImage[] = [
  {
    src: "/gallery/polished-corridor.jpg",
    alt: "Commercial corridor with a high-gloss reflective floor finish",
    caption: "The standard: wet-look shine on commercial floors",
  },
  {
    src: "/gallery/janitorial-cart.jpg",
    alt: "Janitorial worker with a cleaning cart in a commercial interior",
    caption: "Nightly janitorial — consistent crews, full scope",
  },
  {
    src: "/gallery/school-hallway.jpg",
    alt: "Bright school hallway with clean reflective flooring",
    caption: "School corridors cleaned around the academic calendar",
  },
  {
    src: "/gallery/marble-lobby.jpg",
    alt: "Marble lobby floor polished to full clarity",
    caption: "Marble & natural stone brought to full clarity",
  },
];
