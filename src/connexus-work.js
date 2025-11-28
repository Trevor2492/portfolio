import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

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
import headerScroll from "./img/dynamic_scroll_header.MP4";
import mobileSlider from "./img/mobile_slider.MP4";

export default function ConnexusWork() {
  const sections = [
    {
      title: "Dynamic Checking Account Calculator",
      text: [
        "Powered by Chart.js to help users visualize potential benefits of a high-yield checking account.",
        'Two key calculator views — "National Average comparison" and "Earnings."',
      ],
      // images entries can be one of:
      //  - string: path to an image (eg. checking1)
      //  - object: { type: 'video', src: './path/to/file.mp4', mime: 'video/mp4', alt: 'Optional alt text' }
      // If type is omitted and the src string ends with a video extension (.mp4, .webm, .ogg)
      // the renderer will automatically treat it like a video.
      images: [checking1, checking2],
      liveLink: "https://www.connexuscu.org/accounts/checking#dynamic-product-calculator_column",
    },
    {
      title: "Auto Loan Payment Calculator",
      text: [
        "Custom visual tables and charts to simplify loan comparison for customers.",
        "The component loads live rates from the Wordpress CMS and updates dynamically based on user inputs.",
      ],
      images: [autoLoan],
      liveLink: "https://www.connexuscu.org/loans/auto#rates",
    },
    {
      title: "\"Read more\" on mobile",
      text: [
        "Expanding bio sections that keep pages concise on mobile devices while allowing users to dive deeper if desired.",
        "Smooth animated open/close and dynamically detects content length for \"no-maintenance\" set up.",
      ],
      images: [
        {
          type: "video",
          src: bioVideo,
          mime: "video/mp4",
          alt: "CX bio expanding video",
        },
      ],
      liveLink: "https://www.connexuscu.org/about/leadership#board-of-directors",
    },
    {
      title: "Promo Component",
      text: [
        "A flexible promo component designed for featuring time-sensitive offers sitewide.",
        "Supports multiple variants with perk-like bullet points, various CTAs, and image/illustration support.",
      ],
      images: [promoComponent],
      liveLink: "https://www.connexuscu.org/about/contact-us",
    },
    {
      title: "Promo Cards",
      text: [
        "Built a second promotional system that shows multiple content blocks on a single canvas.",
        "Allows for easy updates via CMS and has multiple layout options to fit different use cases.",
      ],
      images: [promoThird],
      liveLink: "https://www.connexuscu.org/promotions",
    },
    {
      title: "Dynamic Mobile Header",
      text: [
        "Animated show/hide header that maximizes screen real estate while keeping key info accessible.",
        "Smooth transitions detect scroll direction and position and display the header accordingly.",
      ],
      images: [
        {
          type: "video",
          src: headerScroll,
          mime: "video/mp4",
          alt: "Dynamic mobile header video",
        },
      ],
      liveLink: "https://www.connexuscu.org",
    },
    {
      title: "Deposit Rate Tables Redesign",
      text: [
        "Dynamic rate table component that pulls live rates and renders them in a clear, accessible format.",
        "Redesigned from the ground up to improve readability and usability on all screen sizes.",
      ],
      images: [depositRate],
      liveLink: "https://www.connexuscu.org/rates",
    },
    {
      title: "Perks",
      text: [
        "Highlighting perks and rewards through a simple, visually-rich content block that drives engagement.",
        "Content can be updated via CMS and supports multiple layout variants.",
      ],
      images: [perks],
      liveLink: "https://www.connexuscu.org/loans/auto-refinance#benefits",
    },
    {
      title: "Mobile Slider Component",
      text: [
        "Built a mobile-first slider component for showcasing featured products on small screens.",
        "Uses javascript to detect scroll position and updates the \"dots\" navigation accordingly. Dots can also be tapped to navigate directly to a slide.",
      ],
      images: [
        {
          type: "video",
          src: mobileSlider,
          mime: "video/mp4",
          alt: "Mobile slider video",
        },
      ],
      liveLink: "https://www.connexuscu.org/#featured-products",
    },
    {
      title: "Disclosure UI",
      text: [
        "Optimized for readability and legal compliance while staying visually integrated with product pages.",
        "Detects content length and adjusts expand/collapse layout accordingly. Also supports anchor linking to superscripts higher up the page.",
      ],
      images: [disclosures],
      liveLink: "https://www.connexuscu.org/loans/auto-refinance#disclosures",
    },
    {
      title: "FAQs",
      text: [
        "Animated open/close FAQ section that improves user experience by allowing quick access to common questions and answers.",
        "Also supports anchor linking which automatically expands the relevant FAQ when navigated to.",
      ],
      images: [faqs],
      liveLink: "https://www.connexuscu.org/loans/auto-refinance#FAQs",
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
          Connexus is the 4th largest credit union in Wisconsin serving over 465,000 members. As a member of the marketing team, I work with our UX designers to bring their visions to
          life. Using a <strong>Headless Wordpress</strong> environment built with <strong>Next.js</strong>, I ensure accessibility and performance best practices are
          met. Every feature is built to be responsive on all screen sizes, and
          optimized for desktop and mobile.
          <br />
          <br />
          This page showcases the work I've done at Connexus over
          the past 4+ years including interactive calculators, dynamic rate
          components, and other UI/UX deliverables.
        </Typography>
        <img
          src={logo}
          alt="Connexus Credit Union Logo"
          style={{ objectFit: "contain", maxWidth: "100%" }}
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
                <Button
                  component={Link}
                  to={section.liveLink}
                  target="blank"
                  endIcon={<ArrowForwardRoundedIcon />}
                  variant="outlined"
                  color="primary"
                >
                  See it live
                </Button>
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
        worked on hundreds more components, features, enhancements, bugfixes, and
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
