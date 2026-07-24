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

export const gallery: GalleryImage[] = [
  // e.g.:
  // { src: "/gallery/strip-wax-after-01.jpg", alt: "High-gloss VCT floor after strip and wax", caption: "VCT strip & wax — after · office corridor" },
];
