"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  clientProjects,
  freelanceProjects,
  omniProducts,
  personalProjects,
} from "@/lib/data/projects";
import { socials } from "@/lib/data/socials";
import { getDurationSince } from "@/lib/utils/duration";

import type { ProjectProps } from "@/lib/data/projects";

interface Experience {
  id: number;
  title: string;
  type: string;
  startDate: string;
  endDate?: string;
}

const experience: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    type: "Full-time",
    startDate: "2024-09-23",
  },
  {
    id: 2,
    title: "Software Engineer",
    type: "Contract",
    startDate: "2024-08-01",
    endDate: "2024-09-22",
  },
];

const ActiveBadge = () => (
  <Tooltip delayDuration={200}>
    <TooltipTrigger asChild>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-500 text-xs">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        in progress
      </span>
    </TooltipTrigger>
    <TooltipContent side="top" sideOffset={8}>
      Currently building this
    </TooltipContent>
  </Tooltip>
);

const ProjectCard = ({
  project,
  isFeatured = false,
}: {
  project: ProjectProps;
  isFeatured?: boolean;
}) => {
  const { name, description, company, client, date, status, links } = project;
  const isActive = status === "active";

  return (
    <li
      className={
        isActive
          ? "grid gap-3 rounded-lg bg-emerald-500/5 p-5 ring-1 ring-emerald-500/15 transition-colors"
          : isFeatured
            ? "grid gap-3 rounded-lg bg-primary/5 p-5"
            : "grid gap-3 rounded-lg p-5 transition-colors hover:bg-muted/50"
      }
    >
      <div className="grid min-w-0 gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <b className="text-foreground text-sm">{name}</b>
          {isActive && <ActiveBadge />}
          {isFeatured && !isActive && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary text-xs">
              featured
            </span>
          )}
          {client && <span className="text-faded-foreground text-xs">{client}</span>}
          {company && !client && <span className="text-faded-foreground text-xs">@ {company}</span>}
        </div>
        <p className="text-muted-foreground text-xs leading-5">{description}</p>
      </div>

      <div className="flex items-center justify-between">
        {date ? <p className="text-faded-foreground text-xs">{date}</p> : <span />}
        <ul className="flex items-center gap-2">
          {links?.map(({ name, url }) =>
            url ? (
              <li key={name}>
                <Button variant={isFeatured ? "primary" : "ghost"} className="h-6 px-2.5 text-xs">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name} ↗
                  </a>
                </Button>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </li>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) => (
  <div className="mb-6 flex items-end justify-between gap-4">
    <div>
      {eyebrow && (
        <p className="mb-1 text-faded-foreground text-xs uppercase tracking-widest">{eyebrow}</p>
      )}
      <h2 className="font-semibold text-base text-foreground">{title}</h2>
      {subtitle && <p className="mt-1 text-muted-foreground text-xs">{subtitle}</p>}
    </div>
    {action}
  </div>
);

const HomePage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-20">
      {/* Header */}
      <header className="mb-24">
        <div className="mb-6">
          <h1 className="font-semibold text-foreground text-sm">Beau Hawkinson</h1>
          <p className="text-muted-foreground text-xs">Software Engineer</p>
        </div>

        <p className="mb-6 max-w-sm text-muted-foreground text-sm leading-relaxed">
          Building products with React, TypeScript, and modern web tooling. Currently at{" "}
          <a
            href="https://omni.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground"
          >
            Omni LLC
          </a>
          .
        </p>

        <ul className="flex items-center gap-1">
          {socials.map(({ name, url, icon }) => (
            <li key={name}>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="size-7 px-0">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <span className="text-muted-foreground [&>svg]:h-3.5 [&>svg]:w-3.5">
                        {icon}
                      </span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={8}>
                  {name}
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </header>

      {/* ============================================ */}
      {/* WORK — Omni and everything under it          */}
      {/* ============================================ */}
      <section className="mb-24">
        <SectionHeading eyebrow="Currently" title="Work" />

        {/* Job card */}
        <div className="mb-10 rounded-lg p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                alt="Omni LLC"
                src="/omni.jpeg"
                height={200}
                width={200}
                className="h-9 w-9 rounded-md object-cover"
              />
              <div>
                <p className="font-medium text-foreground text-sm">Omni LLC</p>
                <p className="text-muted-foreground text-xs">Software Development Agency</p>
              </div>
            </div>
            <Button variant="outline" className="text-xs">
              <a href="https://omni.dev/" target="_blank" rel="noopener noreferrer">
                omni.dev ↗
              </a>
            </Button>
          </div>

          <ul className="flex flex-col">
            {experience.map(({ id, title, type, startDate, endDate }, index) => {
              const isLast = index === experience.length - 1;
              const isCurrent = !endDate;
              const duration = isCurrent
                ? getDurationSince(startDate)
                : getDurationSince(new Date(endDate));

              const dateRange = isCurrent ? "Sep 2024 – Present" : "Aug 2024 – Sep 2024";

              return (
                <li key={id} className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted" />
                    {!isLast && <div className="mt-1 w-px flex-1 bg-border" />}
                  </div>

                  <div className={isLast ? "pb-0" : "pb-6"}>
                    <p className="font-medium text-foreground text-sm">{title}</p>
                    <p className="mt-0.5 text-muted-foreground text-xs">{type}</p>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <p className="mt-0.5 cursor-help text-faded-foreground text-xs">
                          {dateRange} • {duration}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="start" sideOffset={4}>
                        Started{" "}
                        {new Date(startDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Client subsection */}
        <div className="mb-10">
          <div className="mb-4 ml-2">
            <h3 className="font-medium text-foreground text-sm">Client Work</h3>
            <p className="mt-0.5 text-muted-foreground text-xs">
              Research and education platforms built with the University of Minnesota
            </p>
          </div>
          <ul className="grid gap-2">
            {clientProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </div>

        {/* In-house subsection */}
        <div>
          <div className="mb-4 ml-2 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-medium text-foreground text-sm">In-house Products</h3>
              <p className="mt-0.5 text-muted-foreground text-xs">
                Open-source products built by Omni
              </p>
            </div>
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="text-xs">
                  <a href="https://omni.dev/portfolio" target="_blank" rel="noopener noreferrer">
                    See all ↗
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" sideOffset={8}>
                View full Omni portfolio
              </TooltipContent>
            </Tooltip>
          </div>
          <ul className="grid gap-2">
            {omniProducts.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* FREELANCE — independent paid work             */}
      {/* ============================================ */}
      <section className="mb-24">
        <SectionHeading
          eyebrow="On the side"
          title="Freelance"
          subtitle="Independent client work outside of Omni"
        />

        <ul className="grid gap-2">
          {freelanceProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>

      {/* ============================================ */}
      {/* PERSONAL — projects I built myself           */}
      {/* ============================================ */}
      <section>
        <SectionHeading
          eyebrow="Independent"
          title="Personal Projects"
          subtitle="Things I've built outside of Omni"
        />

        <ul className="grid gap-2">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} isFeatured={index === 0} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
