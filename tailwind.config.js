// Tailwind settings for index.html. After changing classes in index.html, rebuild the stylesheet:
//   npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.css -o resources/site.css --minify
// (needs @tailwindcss/forms and @tailwindcss/container-queries installed alongside)
module.exports = {
  content: ['./index.html'],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary": "#1a4731",
          "primary-dark": "#0d2b1d",
          "primary-light": "#2d6b4a",
          "gold": "#c9a84c",
          "gold-light": "#e8c96a",
          "navy": "#0f2744",
          "navy-mid": "#1b3d6b",
          "on-primary": "#ffffff",
          "surface": "#f7f9f7",
          "surface-container": "#eef2ee",
          "surface-container-low": "#f2f6f2",
          "surface-container-lowest": "#ffffff",
          "on-surface": "#0d1f12",
          "on-surface-variant": "#3d4f42",
          "outline": "#6e7e73",
          "outline-variant": "#bfcfc3",
          "primary-fixed": "#e8c96a",
          "primary-fixed-dim": "#c9a84c",
          "on-primary-fixed": "#1a1200",
          "primary-container": "#2d6b4a",
          "on-primary-container": "#ffffff",
          "error": "#ba1a1a"
        },
        borderRadius: {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
        },
        spacing: {
          "gutter": "24px",
        },
        fontFamily: {
          "headline-lg": ["Literata"],
          "headline-md": ["Literata"],
          "display-lg": ["Literata"],
          "body-lg": ["Hanken Grotesk"],
          "body-md": ["Hanken Grotesk"],
          "label-md": ["Hanken Grotesk"],
          "label-sm": ["Hanken Grotesk"],
          "arabic": ["Amiri"],
        },
        fontSize: {
          "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
          "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
          "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
          "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
          "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
          "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "500"}],
          "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        }
      }
    },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
