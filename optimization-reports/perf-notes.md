# Performance Optimization Notes

## Audit Date
January 21, 2026

## Summary
Performance optimization recommendations and implementation status for the single-page garden rooms website.

## Implemented Optimizations

### ✅ Image Lazy Loading
- **Status:** ✅ **IMPLEMENTED**
- **Location:** All images in Hero, Features, Gallery, and FAQ sections
- **Implementation:** Added `loading="lazy"` attribute to all images
- **Impact:** Reduces initial page load time by deferring off-screen image loading

### ✅ Image Alt Text Optimization
- **Status:** ✅ **IMPLEMENTED**
- **Location:** All images across all sections
- **Implementation:** Added descriptive alt text with location keywords (Scotland, Ayrshire, etc.)
- **Impact:** Improves SEO and accessibility

## Recommended Optimizations

### 1. Image Format Optimization
- **Current:** JPEG images
- **Recommendation:** Convert to WebP format for better compression
- **Location:** `static/imgs/` directory
- **Impact:** 25-35% file size reduction
- **Priority:** Medium

### 2. Font Preloading
- **Current:** Google Fonts (Playfair Display) loaded via link tag
- **Recommendation:** Add `<link rel="preload">` for critical fonts
- **Location:** `src/layouts/BaseLayout.astro`
- **Impact:** Reduces font swap flash (FOUT/FOIT)
- **Priority:** High

### 3. Image Dimensions
- **Current:** Images don't have explicit width/height attributes
- **Recommendation:** Add width and height attributes to prevent CLS (Cumulative Layout Shift)
- **Location:** All image components
- **Impact:** Improves Core Web Vitals CLS score
- **Priority:** High

### 4. Hero Image Optimization
- **Current:** Multiple hero images in slideshow
- **Recommendation:** 
  - Use `loading="eager"` for first hero image only
  - Optimize hero images for LCP (Largest Contentful Paint)
  - Consider using next-gen formats (WebP, AVIF)
- **Impact:** Improves LCP score (Core Web Vitals)
- **Priority:** High

### 5. Tailwind CSS Purge Configuration
- **Current:** Using Tailwind CSS
- **Recommendation:** Verify `tailwind.config.ts` has proper purge/content configuration
- **Impact:** Reduces CSS bundle size
- **Priority:** Medium

### 6. JavaScript Bundle Optimization
- **Current:** React components with `client:load` directive
- **Recommendation:** 
  - Use `client:idle` for non-critical components
  - Use `client:visible` for below-fold components
- **Impact:** Reduces initial JavaScript bundle size
- **Priority:** Medium

## Core Web Vitals Considerations

### LCP (Largest Contentful Paint)
- **Risk:** Hero image slideshow
- **Mitigation:** 
  - ✅ Lazy loading implemented
  - ⚠️ Add explicit dimensions
  - ⚠️ Optimize first hero image
  - ⚠️ Consider preloading first hero image

### CLS (Cumulative Layout Shift)
- **Risk:** Images without dimensions, font loading
- **Mitigation:**
  - ⚠️ Add width/height to all images
  - ⚠️ Preload fonts
  - ⚠️ Reserve space for dynamic content

### FID (First Input Delay) / INP (Interaction to Next Paint)
- **Risk:** Large JavaScript bundles
- **Mitigation:**
  - ✅ Using Astro's island architecture
  - ⚠️ Consider `client:idle` for non-critical components
  - ⚠️ Code splitting where possible

## Quick Wins (High Priority)

1. ✅ **Image Lazy Loading** - COMPLETE
2. ⚠️ **Add Image Dimensions** - Add width/height to prevent CLS
3. ⚠️ **Font Preloading** - Preload Playfair Display font
4. ⚠️ **Hero Image Optimization** - Optimize first hero image for LCP

## Status
✅ **PARTIAL** - Lazy loading implemented. Additional optimizations recommended for Core Web Vitals improvement.
