import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

// Images used in the Connexus showcase sections
import promoComponent from "./img/promo component.png";
import promoThird from "./img/promo third component.png";
import depositRate from "./img/deposit rate table.png";
import autoLoan from "./img/auto loan table.png";
import checking1 from "./img/checking calculator 1.png";
import checking2 from "./img/checking calculator 2.png";
import disclosures from "./img/disclosures.png";
import perks from "./img/perks.png";
import faqs from "./img/FAQs.png";
import logo from "./img/cxcu_logo.webp";
import bioVideo from "./img/cx-bio_read_more.MP4";

export default function ConnexusWork() {
  const sections = [
    {
      title: "Dynamic Checking Account Calculator",
      text: [
        'Two key calculator views — "National Average comparison" and "Earnings."',
        "Both views support keyboard navigation and clear labels for screen readers.",
      ],
      // images entries can be one of:
      //  - string: path to an image (eg. checking1)
      //  - object: { type: 'video', src: './path/to/file.mp4', mime: 'video/mp4', alt: 'Optional alt text' }
      // If type is omitted and the src string ends with a video extension (.mp4, .webm, .ogg)
      // the renderer will automatically treat it like a video.
      images: [checking1, checking2],
    },
    {
      title: "Auto Loan Payment Calculator",
      text: [
        "Custom visual tables and charts to simplify loan comparison for customers.",
        "The component supports responsive layouts and accessibility guidelines so information is usable on any device.",
      ],
      images: [autoLoan],
    },
    {
      title: "Promo Component",
      text: [
        "A flexible promo component designed for rapid A/B testing across the site.",
        "Supports dynamic copy and image swapping without redeploys, reducing time-to-market.",
      ],
      images: [promoComponent],
    },
    {
      title: "Promo Cards",
      text: [
        "Built a second promotional system that aggregates multiple content blocks on a single canvas.",
        "Designed to scale across desktop and mobile with animated reveal states for performance-friendly transitions.",
      ],
      images: [promoThird],
    },
    {
      title: "Deposit Rate Tables Redesign",
      text: [
        "Dynamic rate table component that pulls live rates and renders them in a clear, accessible format.",
        "Includes sorting and filtering so users can quickly compare options and learn more with a single click.",
      ],
      images: [depositRate],
    },
    {
      title: "Disclosure UI",
      text: [
        "Brief, scannable disclosure panels surfaced where decisions are made, reducing surprise fees.",
        "Optimized for readability and legal compliance while staying visually integrated with product pages.",
      ],
      images: [disclosures],
    },
    {
      title: "Perks",
      text: [
        "Highlighting perks and rewards through a simple, visually-rich content block that drives engagement.",
        "Content can be updated via CMS and surfaced across multiple customer journeys.",
      ],
      images: [perks],
    },
    {
      title: "FAQs",
      text: [
        "Highlighting perks and rewards through a simple, visually-rich content block that drives engagement.",
        "Content can be updated via CMS and surfaced across multiple customer journeys.",
      ],
      images: [faqs],
    },
    {
      title: "Bio Component Expanding \"Read more\"",
      text: [
        "This small demo shows how to include a video in the same images array used throughout this page.",
        "Use a string that ends with .mp4/.webm/.ogg or an object with type: 'video' and a src field.",
      ],
      images: [
        {
          type: "video",
          src: bioVideo,
          mime: "video/mp4",
          alt: "CX bio expanding video",
        },
      ],
    },
  ];

  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Button
        component={Link}
        to="/portfolio"
        startIcon={<ArrowBackRoundedIcon />}
        variant="text"
        color="primary"
      >
        Back
      </Button>
      <Typography variant="h3" style={{ marginTop: "1rem" }}>
        Connexus - Recent Work
      </Typography>

      <Container className="top-container">
        <Typography variant="body1" className="typography">
          This page showcases the work I've done at Connexus Credit Union over
          the past 4+ years including interactive calculators, dynamic rate
          components, and other UI/UX pieces.
          <br />
          <br />I work closely with our UX design team to bring their visions to
          life while ensuring accessibility and performance best practices are
          met. Every feature is built to be responsive on all screen sizes, and
          optimized for desktop and mobile.
        </Typography>
        <img
          src={logo}
          alt="Connexus Credit Union Logo"
          style={{ maxWidth: "100%" }}
        />
      </Container>

      {/* Render each section */}
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        const sectionClass = `cx-section${isEven ? "" : " odd"}`;

        return (
          <section className={sectionClass} key={section.title}>
            {/* inner keeps content centered and constrained to max-width */}
            <div className="cx-inner">
              <div className="cx-column cx-text">
                <Typography variant="h4">{section.title}</Typography>
                {section.text.map((p, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    style={{ marginTop: "0.75rem" }}
                  >
                    {p}
                  </Typography>
                ))}
              </div>

              <div className="cx-column cx-images">
                {section.images.map((item, i) => {
                  // support either a simple string (image/video) or an object with a `type` + `src`
                  const src = typeof item === "string" ? item : item.src;
                  const explicitType = typeof item === "object" && item.type;
                  const isVideo = explicitType
                    ? explicitType === "video"
                    : /\.(mp4|webm|ogg)$/i.test(String(src));

                  if (isVideo) {
                    // allow optional mime type and alt text for videos in an object form
                    const mime =
                      typeof item === "object" && item.mime
                        ? item.mime
                        : "video/mp4";
                    const alt =
                      typeof item === "object" && item.alt
                        ? item.alt
                        : `${section.title} ${i + 1}`;

                    return (
                      <video
                        source src={src} 
                        type={mime}
                        key={i}
                        controls
                        aria-label={alt}
                      />
                    );
                  }

                  // default: render an image
                  const altText =
                    typeof item === "object" && item.alt
                      ? item.alt
                      : `${section.title} ${i + 1}`;

                  return (
                    <img
                      key={i}
                      src={src}
                      alt={altText}
                      style={{ maxWidth: "100%", borderRadius: 8 }}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <Typography
        variant="body1"
        style={{ borderTop: "1px solid #ccc", paddingTop: "1rem" }}
      >
        These projects are only a few highlights of my work at Connexus. I've
        worked hundreds more components, features, enhancements, bugfixes, and
        optimizations that contribute to a seamless user experience. Check out
        the website at{" "}
        <a
          href="https://www.connexuscu.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          connexuscu.org{" "}
        </a>
        to see more of my work.
      </Typography>
    </Container>
  );
}
