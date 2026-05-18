"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import type { ProjectProps } from "@/lib/data/projects";

const ProjectCard = ({
  project,
  isFeatured = false,
}: {
  project: ProjectProps;
  isFeatured?: boolean;
}) => {
  const { name, description, company, client, date, status, websiteUrl, githubUrl } = project;
  const isActive = status === "active";

  return (
    <li className="group relative grid gap-3 rounded-xl p-5 transition-colors hover:bg-muted/50">
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
      >
        <span className="sr-only">Visit {name}</span>
      </a>

      <div className="grid min-w-0 gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <b className="text-foreground">{name}</b>
          {isActive && (
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-active-bg px-2 py-0.5 font-medium text-active-text text-xs">
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
        <p className="text-faded-foreground text-xs leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center justify-between">
        {date ? <p className="text-faded-foreground text-xs">{date}</p> : <span />}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} source code on GitHub`}
            className="relative z-10 inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-faded-foreground text-xs opacity-0 transition-[transform,opacity] duration-150 hover:text-foreground focus:outline-none focus-visible:text-foreground focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-primary group-hover:opacity-100"
          >
            <GitHubIcon />
            <span>code</span>
          </a>
        )}
      </div>
    </li>
  );
};

export default ProjectCard;

export const GitHubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-3.5 w-3.5">
    <title>GitHub</title>
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  </svg>
);
