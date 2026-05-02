# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2026-05-02

### Added
- "Quickstart Guide" section to landing page with step-by-step setup instructions.

### Fixed
- Corrected all GitHub repository links across `index.html`, `page.html`, `README.md`, and `TERMS.md` to point to the correct repository (`tuliosousapro/x-silly-feed`).
- Fixed broken markdown fetching in documentation viewer caused by incorrect repository path.

## [0.2.0] - 2026-05-01

### Added
- Complete landing page rebuild: "The Living Notebook" experience.
- Interactive "Silly Slider" for boring-to-silly transformation.
- Kinetic Typography engine with wobbly/jitter animations.
- Scroll-triggered SVG drawing animations ("Doodle Section").
- Sticky Tape Navbar with custom tape visual elements.
- Wobbly Bento Grid 2.0 with irregular rotations and overlapping notes.
- Custom ink-bleed and paper texture CSS tokens.
- Fixed demo slider: Corrected 'Boring' vs 'Silly' screenshot mapping.
- Legal documentation: Privacy Policy, Terms, and Disclaimer.
- `llms.txt` for enhanced AI context.

### Changed
- Migrated from Tailwind CSS to a high-performance Vanilla CSS architecture.
- Optimized SVG filters for 60fps wobble effects without CPU lag.
- Refactored `app.js` for lightweight, non-blocking interaction logic.

## [0.1.1] - 2026-05-01

### Added
- Comprehensive README.md overhaul.
- Initial landing page structure.

## [0.1.0] - 2026-05-01

### Added
- Initial Chrome Extension structure.
- Background service worker.
- Content script and styles for feed manipulation.
- Popup UI for user interaction.
- Project metadata and icons.
- Task management files (`tasks/todo.md`, `tasks/lessons.md`).
- `humans.txt` and `README.md`.
