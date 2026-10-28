
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Accent = "mint" | "sand" | "blue" | "rose";

type Visual = "taskflow" | "rokkers" | "maths" | "restaurant";

type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  live?: string;
  repo: string;
  accent: Accent;
  visual?: Visual;
  featured?: boolean;
  highlights?: string[];
  status?: "live" | "in-development";
};

const projects: Project[] = [
  {
    number: "01",
    name: "Job Board Website",
    type: "Job discovery platform",
    description:
      "A job-listing interface focused on browsing opportunities and keeping the job discovery experience clear and responsive.",
    stack: ["React 19", "Tailwind CSS", "React Router", "TanStack Query", "Vite"],
    live: "https://habkenny.github.io/JobBoardWebsite/",
    repo: "https://github.com/Habkenny/JobBoardWebsite",
    accent: "blue",
    featured: true,
    highlights: [
      "Structured navigation with React Router",
      "Server-state and caching patterns with TanStack Query",
    ],
    status: "live",
  },
  {
    number: "02",
    name: "The Blessed Union",
    type: "Wedding website",
    description:
      "A wedding website designed to present event information in a polished, welcoming, and mobile-friendly experience.",
    stack: ["React 19", "Vite", "React Router", "Framer Motion", "Bootstrap"],
    live: "https://msk-maryam-wedding.vercel.app/",
    repo: "https://github.com/Habkenny/MSKNikaahPage",
    accent: "rose",
    status: "live",
  },
  {
    number: "03",
    name: "Iron Forge Gym",
    type: "Fitness website",
    description:
      "A responsive gym website presenting a fitness brand through a focused layout and clear visual hierarchy.",
    stack: ["React 19", "Vite", "CSS"],
    live: "https://gymrepos.netlify.app/",
    repo: "https://github.com/Habkenny/GymRepo",
    accent: "sand",
    status: "live",
  },
  {
    number: "04",
    name: "Wedding Invitation Card",
    type: "Digital invitation",
    description:
      "A digital wedding invitation built with web fundamentals and a layout designed for sharing across devices.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://mskmweddingcard.netlify.app/",
    repo: "https://github.com/Habkenny/MSKMWeddingCard",
    accent: "rose",
    status: "live",
  },
  {
    number: "05",
    name: "Vue SaaS Analytics Dashboard",
    type: "Full-stack analytics",
    description:
      "An analytics dashboard project exploring typed frontend development alongside a backend API and database tooling.",
    stack: ["Vue 3", "TypeScript", "Tailwind CSS", "NestJS", "Prisma"],
    live: "https://vue-saa-s-analytics-dashboard.vercel.app/",
    repo: "https://github.com/Habkenny/VueSaaSAnalyticsDashboard",
    accent: "blue",
    featured: true,
    highlights: [
      "Vue and TypeScript frontend",
      "NestJS API and Prisma integration",
    ],
    status: "live",
  },
  {
    number: "06",
    name: "Real Estate E-Commerce",
    type: "Interactive data-driven interface",
    description:
      "A real-estate interface combining property presentation, data visualisation, and automated testing tools.",
    stack: ["React 18", "Vite", "Tailwind CSS", "D3", "Framer Motion", "Vitest"],
    live: "https://real-estate-ecommerce-grid.vercel.app/",
    repo: "https://github.com/Habkenny/RealEstateEcommerceGrid",
    accent: "mint",
    featured: true,
    highlights: [
      "D3-based data visualisation",
      "Vitest testing setup",
    ],
    status: "live",
  },
  {
    number: "07",
    name: "IRI Platform",
    type: "Responsive website",
    description:
      "A responsive website project focused on structured content, reusable interface patterns, and cross-device usability.",
    stack: ["React", "TypeScript", "Bootstrap", "JavaScript"],
    live: "https://iri-website.vercel.app/",
    repo: "https://github.com/Habkenny/iri-website",
    accent: "blue",
    featured: true,
    status: "live",
  },
  {
    number: "08",
    name: "DataSync Pro",
    type: "B2B SaaS landing page",
    description:
      "A business-to-business SaaS landing page concept designed to communicate a product proposition through a clear page structure.",
    stack: ["React", "TypeScript", "Vite", "ESLint"],
    live: "https://b2-b-saa-s-landing-page-conversion.vercel.app/",
    repo: "https://github.com/Habkenny/B2BSaaSLandingPageConversionLab",
    accent: "mint",
    status: "live",
  },
  {
    number: "09",
    name: "Saalify",
    type: "E-commerce platform",
    description:
      "An e-commerce interface concept built with web fundamentals and browser storage capabilities.",
    stack: ["HTML", "CSS", "JavaScript", "PWA", "LocalStorage"],
    live: "https://saalify-modern-e-commerce-platform.vercel.app/",
    repo: "https://github.com/Habkenny/Saalify---Modern-E-Commerce-Platform",
    accent: "sand",
    status: "live",
  },
  {
    number: "10",
    name: "ShopEase",
    type: "E-commerce landing page",
    description:
      "A storefront-style landing page with a responsive layout and familiar e-commerce visual patterns.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://shopeasecommerc.netlify.app/",
    repo: "https://github.com/Habkenny/E_Commerce_LP",
    accent: "rose",
    status: "live",
  },
  {
    number: "11",
    name: "TaskFlow Landing Page",
    type: "Product landing page",
    description:
      "A landing page concept for a task-management product, with an emphasis on layout, visual hierarchy, and responsive presentation.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Animations"],
    live: "https://taskflowlp.netlify.app/",
    repo: "https://github.com/Habkenny/TaskFlow_Landing_Page",
    accent: "mint",
    status: "live",
  },
  {
    number: "12",
    name: "HabTech Blog",
    type: "Blog application",
    description:
      "A React-based blog application exploring Markdown content and browser-based persistence.",
    stack: ["React 18", "Vite", "React Markdown", "CSS", "LocalStorage"],
    live: "https://habkenny.github.io/BlogAppWithCursorAI/",
    repo: "https://github.com/Habkenny/BlogAppWithCursorAI",
    accent: "blue",
    status: "live",
  },
  {
    number: "13",
    name: "Task Manager",
    type: "Productivity application",
    description:
      "A browser-based task-management application built to practise component-driven UI development and local persistence.",
    stack: ["React 18", "Vite", "CSS", "LocalStorage"],
    live: "https://habkenny.github.io/TaskMAnagerApp/",
    repo: "https://github.com/Habkenny/TaskMAnagerApp",
    accent: "mint",
    status: "live",
  },
  {
    number: "14",
    name: "Fliprly",
    type: "Marketplace landing page",
    description:
      "A marketplace landing-page concept focused on presenting a digital product through a responsive marketing layout.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://habkenny.github.io/Flrpy_LP_demo/",
    repo: "https://github.com/Habkenny/Fliprly",
    accent: "sand",
    status: "live",
  },
  {
    number: "15",
    name: "Rokkers Foundation",
    type: "Charity website",
    description:
      "A website for a charitable organisation, built to communicate its purpose and make key information easy to find.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "SEO", "Responsive Design"],
    live: "https://rokkers-foundation-charity.vercel.app/",
    repo: "https://github.com/Habkenny/Rokkers_Foundation_Charity",
    accent: "sand",
    visual: "rokkers",
    featured: true,
    highlights: [
      "Semantic page structure and SEO considerations",
      "Responsive design and deployed website",
    ],
    status: "live",
  },
  {
    number: "16",
    name: "PhD Application Form",
    type: "Form and validation",
    description:
      "A responsive application form built to practise input organisation, validation, and clear form interactions.",
    stack: ["HTML", "CSS", "JavaScript", "Form Validation", "Responsive Design"],
    live: "https://habkenny.github.io/PhD-Application-Form/",
    repo: "https://github.com/Habkenny/PhD-Application-Form",
    accent: "blue",
    status: "live",
  },
  {
    number: "17",
    name: "TaskFlow PWA",
    type: "Offline-first productivity app",
    description:
      "A task-management progressive web app with task scheduling features and offline support.",
    stack: ["JavaScript", "HTML", "CSS", "LocalStorage", "Service Workers", "PWA"],
    live: "https://habkenny.github.io/Habtech-To_Do_List/",
    repo: "https://github.com/Habkenny/Habtech-To_Do_List",
    accent: "mint",
    visual: "taskflow",
    featured: true,
    highlights: [
      "Service worker and offline support",
      "Calendar, due dates, and reminder features",
    ],
    status: "live",
  },
  {
    number: "18",
    name: "Birthday Message Generator",
    type: "Interactive web app",
    description:
      "A small interactive application for generating birthday messages, with a responsive interface.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    live: "https://habkenny.github.io/Birthday_Card_Generator/",
    repo: "https://github.com/Habkenny/Birthday_Card_Generator",
    accent: "rose",
    status: "live",
  },
  {
    number: "19",
    name: "Maths Adventure",
    type: "Educational PWA",
    description:
      "An educational maths application in development, designed around child-friendly quizzes, progress, and offline access.",
    stack: ["React", "TypeScript", "Vite", "PWA", "IndexedDB", "Accessibility"],
    repo: "https://github.com/Habkenny/Maths-Adventure-for-Year-2",
    accent: "blue",
    visual: "maths",
    highlights: [
      "Interactive, child-friendly maths practice",
      "Offline-first architecture using browser storage",
    ],
    status: "in-development",
  },
  {
    number: "20",
    name: "Adesola Restaurant",
    type: "Restaurant website",
    description:
      "A restaurant website in development, with a focus on responsive presentation, accessibility, and a reservation workflow.",
    stack: ["React", "TypeScript", "Responsive Design", "Accessibility", "Netlify"],
    repo: "https://github.com/Habkenny/adesola-restaurant",
    accent: "sand",
    visual: "restaurant",
    highlights: [
      "Responsive restaurant website interface",
      "Reservation workflow planned for deployment",
    ],
    status: "in-development",
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const moreProjects = projects.filter((project) => !project.featured);

function ProjectVisual({ project }: { project: Project }) {
  const visualLabels: Record<Visual, string> = {
    taskflow: "TaskFlow task-management preview",
    rokkers: "Rokkers Foundation website preview",
    maths: "Maths Adventure educational app preview",
    restaurant: "Adesola Restaurant website preview",
  };

  return (
    <div
      className={`project-visual project-visual--${project.accent}`}
      role="img"
      aria-label={
        project.visual
          ? `${visualLabels[project.visual]}. Illustrative preview, not a screenshot.`
          : `Illustrative design preview for ${project.name}, not an application screenshot.`
      }
    >
      <div className="project-visual__window">
        <div className="project-visual__toolbar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="project-visual__body">
          <span className="project-visual__eyebrow">{project.type}</span>
          <div className="project-visual__heading">{project.name}</div>

          <div className="project-visual__lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="project-visual__blocks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <span className="project-visual__number" aria-hidden="true">
        {project.number}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isInDevelopment = project.status === "in-development";

  return (
    <article
      className={`project-card project-card--${project.accent}`}
      aria-labelledby={`project-title-${project.number}`}
    >
      <ProjectVisual project={project} />

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.number}</span>
          <span>{project.type}</span>
        </div>

        <div className="project-card__heading-row">
          <h3 id={`project-title-${project.number}`}>{project.name}</h3>

          {isInDevelopment && (
            <span className="project-card__status">In development</span>
          )}
        </div>

        <p className="project-card__description">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card__highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        <ul className="project-card__stack" aria-label="Technologies used">
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo of ${project.name} (opens in a new tab)`}
            >
              Live demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <span className="project-card__no-demo">No live demo yet</span>
          )}

          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`View source code for ${project.name} on GitHub (opens in a new tab)`}
          >
            Source code <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects built to solve practical problems."
            description="A selection of websites, applications, dashboards, and progressive web apps. Explore the live demos where available or review the source code."
          />
        </Reveal>

        <div className="projects-grid projects-grid--featured">
          {featuredProjects.map((project) => (
            <Reveal key={project.number}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="projects-more">
          <p className="projects-more-intro">
            Want to see more? Explore additional projects and experiments.
          </p>

          <button
            type="button"
            className="projects-more-toggle"
            aria-expanded={showMoreProjects}
            aria-controls="more-projects-list"
            onClick={() => setShowMoreProjects((current) => !current)}
          >
            {showMoreProjects
              ? "Show fewer projects"
              : `Explore ${moreProjects.length} additional projects`}

            {showMoreProjects ? (
              <ArrowUpRight size={18} aria-hidden="true" />
            ) : (
              <ArrowDownRight size={18} aria-hidden="true" />
            )}
          </button>

          <div
            id="more-projects-list"
            className="projects-more-list"
            hidden={!showMoreProjects}
          >
            <div className="projects-grid projects-grid--more">
              {moreProjects.map((project) => (
                <Reveal key={project.number}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-footer">
          <p>Interested in exploring more of my work?</p>
          <a
            href="https://github.com/Habkenny"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
