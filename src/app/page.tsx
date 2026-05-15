"use client";

import Image from "next/image";

import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { experience } from "@/lib/data/experiences";
import {
  clientProjects,
  freelanceProjects,
  omniProducts,
  personalProjects,
} from "@/lib/data/projects";
import { socials } from "@/lib/data/socials";
import { formatDuration } from "@/lib/utils/duration";

const HomePage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-20">
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
          {socials.map(({ name, url, icon }) => {
            return (
              <li key={name}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      <span className="text-muted-foreground [&>svg]:h-3.5 [&>svg]:w-3.5">
                        {icon}
                      </span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" sideOffset={8}>
                    {name}
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </header>

      <section className="mb-24">
        <SectionHeading title="Work" />

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
            <a
              href="https://omni.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              omni.dev ↗
            </a>
          </div>

          <ul className="flex flex-col">
            {experience.map(({ id, title, type, startDate, endDate }, index) => {
              const isLast = index === experience.length - 1;

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
                        <span className="text-xs">{formatDuration(startDate, endDate)}</span>
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
          <ul className="grid gap-4">
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
                <a
                  href="https://omni.dev/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  See all ↗
                </a>
              </TooltipTrigger>
              <TooltipContent side="left" sideOffset={8}>
                View full Omni portfolio
              </TooltipContent>
            </Tooltip>
          </div>
          <ul className="grid gap-4">
            {omniProducts.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </div>
      </section>

      {/* FREELANCE */}
      <section className="mb-24">
        <SectionHeading title="Freelance" subtitle="Independent client work outside of Omni" />

        <ul className="grid gap-4">
          {freelanceProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>

      {/* PERSONAL */}
      <section>
        <SectionHeading title="Personal Projects" subtitle="Things I've built outside of Omni" />

        <ul className="grid gap-4">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} isFeatured={index === 0} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
