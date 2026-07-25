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

// REAL KCS job-site photos, migrated from the client's previous website
// (krystalclearservices.com) with the owner's permission. Full export
// archived in /public/photos/originals/.
export const gallery: GalleryImage[] = [
  {
    src: "/gallery/polished-corridor.jpg",
    alt: "Freshly stripped and waxed VCT corridor with a wet-look shine",
    caption: "VCT strip & wax — the full wet-look rebuild",
  },
  {
    src: "/gallery/janitorial-cart.jpg",
    alt: "KCS crew member vacuuming a dental clinic with a backpack vacuum at night",
    caption: "Night crew — servicing a dental clinic after hours",
  },
  {
    src: "/gallery/marble-lobby.jpg",
    alt: "Stained concrete floor burnished to a high-gloss mirror finish",
    caption: "Stained concrete, burnished to a mirror finish",
  },
  {
    src: "/gallery/carpet-midpass.jpg",
    alt: "Commercial carpet mid-extraction with a visible clean line",
    caption: "Carpet extraction — the clean line, mid-pass",
  },
  {
    src: "/gallery/marble-maintenance.jpg",
    alt: "Floor machines and equipment staged on a marble corridor during a maintenance night",
    caption: "Marble maintenance night — crew staged and working",
  },
  {
    src: "/gallery/school-hallway.jpg",
    alt: "Glossy finished floor in an industrial controlled environment",
    caption: "Industrial floor, finished for a controlled environment",
  },
];
