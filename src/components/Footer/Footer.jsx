import React from "react";
import Email from "../../Icons/Footer/Email";
import Phone from "../../Icons/Footer/Phone";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerSections = {
    services: [
      { title: "Web Hosting", link: "/web-hosting" },
      { title: "Domains", link: "/domains" },
      { title: "Premium Hosting", link: "/premium-hosting" },
      { title: "Private Server", link: "/private-server" },
      { title: "E-mail Hosting", link: "/email-hosting" },
    ],
    support: [
      { title: "Support", link: "/support" },
      { title: "Pricing Plan", link: "/pricing-plan" },
      { title: "Documentation", link: "/documentation" },
      { title: "Guide", link: "/guide" },
      { title: "Tutorial", link: "/tutorial" },
    ],
    company: [
      { title: "About", link: "/about" },
      { title: "Blog", link: "/blog" },
      { title: "Join Us", link: "/join-us" },
      { title: "Press", link: "/press" },
      { title: "Partners", link: "/partners" },
    ],
    legal: [
      { title: "Claim", link: "/claim" },
      { title: "Privacy", link: "/privacy" },
      { title: "Terms", link: "/terms" },
    ],
  };

  return (
    <div className="card-style p-10 pb-[5em] !rounded-none">
      <div className="flex flex-col items-center md:flex-row gap-[5em]">
        <div className="flex flex-col gap-[2em] md:max-w-[25%] md:w-[40%]">
          <h1 className="text-[#0FB3BB] text-[2.23rem] font-[400]">Sky Cast</h1>
          <p>
            Funding freemium long tail hypotheses first mover advantage assets ownership
          </p>
          <div className="flex flex-col gap-[1em]">
            <div className="flex items-center gap-4">
              <Email />
              <a
                className="text-[#000000d9] text-[1rem] inline-block"
                href="mailto:SkyCast@mail.cor"
              >
                SkyCast@mail.cor
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone />
              <a
                className="text-[#000000d9] text-[1rem] inline-block"
                href="tel:12 3456 7890"
              >
                +12 3456 7890
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[2em] w-full md:w-[60%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4">
            <FooterSection title="Services" items={footerSections.services} />
            <FooterSection title="Support" items={footerSections.support} />
            <FooterSection title="Company" items={footerSections.company} />
            <FooterSection title="Legal" items={footerSections.legal} />
          </div>
        </div>
      </div>
    </div>
  );
}

const FooterSection = ({ title, items }) => (
  <div className="flex-col flex">
    <h3 className="py-[1em] text-[#92989F] font-semibold">{title}</h3>
    <div className="flex gap-4 flex-col">
      {items.map((item) => (
        <Link key={item.link} to={item.link}>
          {item.title}
        </Link>
      ))}
    </div>
  </div>
);
