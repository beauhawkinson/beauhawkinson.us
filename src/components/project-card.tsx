"use client";

import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import type { ProjectProps } from "@/lib/data/projects";

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
          ? "grid gap-3 rounded-lg bg-active-bg p-5 ring-1 ring-active-ring transition-colors"
          : isFeatured
            ? "grid gap-3 rounded-lg bg-primary/5 p-5"
            : "grid gap-3 rounded-lg p-5 transition-colors hover:bg-muted/50"
      }
    >
      <div className="grid min-w-0 gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <b className="text-foreground text-sm">{name}</b>
          {isActive && (
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-active-bg px-2 py-0.5 font-medium text-active-text text-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-active-text opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-active-text" />
                  </span>
                  in progress
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8}>
                Currently building this
              </TooltipContent>
            </Tooltip>
          )}
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
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: isFeatured ? "primary" : "ghost" })}
                >
                  {name} ↗
                </a>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </li>
  );
};

export default ProjectCard;
