"use client";

import Image from "next/image";

import type { ProjectProps } from "@/lib/data/projects";

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { name, description, company, client, date, status, websiteUrl, logo, content } = project;
  const isActive = status === "active";

  return (
    <>
      <li className="relative grid gap-1.5 rounded-xl p-5 transition-colors hover:bg-muted/60">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span className="sr-only">Visit {name}</span>
          </a>
        )}

        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
          <div className="flex items-center gap-2">
            {logo && (
              <Image
                src={logo}
                alt={`${name} logo`}
                className="size-4 shrink-0 rounded-sm object-contain"
              />
            )}

            <b className="text-foreground leading-tight">{name}</b>

            {isActive && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-active-bg px-2 py-0.5 font-medium text-active-text text-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-active-text opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-active-text" />
                </span>
                in progress
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {client && <span className="text-faded-foreground text-xs">{client}</span>}
            {company && !client && (
              <span className="text-faded-foreground text-xs">@ {company}</span>
            )}
            {date && <span className="text-faded-foreground text-xs">{date}</span>}
          </div>
        </div>

        <p className="mt-2 text-muted-foreground text-xs leading-relaxed">{description}</p>
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
