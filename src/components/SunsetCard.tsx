"use client";

import Image from "next/image";

import { getSunsetCursorUrl } from "@/app/utils/cursor";
import type { ProjectProps } from "@/lib/data/projects";

const SunsetCard = ({ project }: { project: ProjectProps }) => {
  const { name, description, company, client, date, logo } = project;

  const cursorStyle = {
    cursor: getSunsetCursorUrl(),
  };

  return (
    <li
      className="relative grid gap-1.5 rounded-xl border-2 border-dashed border-faded-foreground/40 p-5 select-none opacity-60 transition-opacity hover:opacity-70"
      style={cursorStyle}
    >
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

          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-0.5 font-medium text-amber-900 text-xs dark:bg-amber-950/50 dark:text-amber-100">
            <span className="text-lg">🌅</span>
            sunset
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {client && <span className="text-faded-foreground text-xs">{client}</span>}
          {company && !client && (
            <span className="text-faded-foreground text-xs">@ {company}</span>
          )}
        </div>

        {date && <span className="text-faded-foreground text-xs">{date}</span>}
      </div>

      <p className="mt-2 text-muted-foreground text-xs leading-relaxed">{description}</p>
    </li>
  );
};

export default SunsetCard;
