"use client";

import Image from "next/image";

import type { ProjectProps } from "@/lib/data/projects";

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { name, description, company, client, date, status, websiteUrl, logo, content } = project;
  const isActive = status === "active";
  const isSunset = status === "sunset";

  return (
    <>
      <li
        className={`relative grid gap-1.5 rounded-xl p-5 transition-colors ${!isSunset && "hover:bg-muted/60"} ${isSunset && "select-none"}`}
      >
        {websiteUrl && !isSunset && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span className="sr-only">Visit {name}</span>
          </a>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {logo && (
            <Image
              src={logo}
              alt={`${name} logo`}
              className="size-4 shrink-0 rounded-sm object-contain"
            />
          )}

          <b className="text-foreground">{name}</b>

          {isActive && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-active-bg px-2 py-0.5 font-medium text-active-text text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-active-text opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-active-text" />
              </span>
              in progress
            </span>
          )}

          {isSunset && (
            <span className="inline-flex items-center gap-1.5 rounded-full font-medium text-amber-700 text-xs dark:bg-amber-950/40 dark:text-amber-200">
              <span className="text-lg">🌅</span>
              sunset
            </span>
          )}

          {client && <span className="text-faded-foreground text-xs">{client}</span>}
          {company && !client && <span className="text-faded-foreground text-xs">@ {company}</span>}
          {date && <span className="text-faded-foreground text-xs">{date}</span>}
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
      </li>

      {content && (
        <div className="mt-2 flex h-full items-center justify-center overflow-hidden py-20">
          {content}
        </div>
      )}
    </>
  );
};

export default ProjectCard;
