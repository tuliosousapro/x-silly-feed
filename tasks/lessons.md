# Lessons Learned - X Silly Feed

- *Initial Setup*: Ensure `border-shape` selectors are specific enough to override X.com's inline styles.
- *Icon Conversion*: Use `npx svgexport` for reliable SVG to PNG conversion when specialized local tools like ImageMagick are unavailable.
- *Landing Page Design*: When blending Brutalism with a "sketch" theme, use Bento Grids with thick borders (4px+) and high-contrast color blocks to maintain structure while feeling unpolished.
- *Vanilla Migration*: Migrating from Tailwind to Vanilla CSS allows for better control over complex animations (like kinetic typography) and reduces the final payload significantly for landing pages.
- *SVG Drawing*: Using `stroke-dasharray` and `stroke-dashoffset` combined with `IntersectionObserver` provides a high-performance "drawing" effect that feels extremely premium in sketchbook designs.
- *Slider Logic*: Use `clip-path: inset()` for image comparison sliders to avoid layout shifts and ensure pixel-perfect alignment between layers.

