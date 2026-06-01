"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import ArrowUpRight from "@/components/icons/arrow-up-right";
import { Link } from "@/components/link";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import { clientProjects, omniProducts, projects } from "@/lib/data/projects";
import { socials } from "@/lib/data/socials";
import { formatDuration } from "@/lib/utils/duration";

const HomePage = () => {
  const [_, setViews] = useState<number>(0);

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((r) => r.json())
      .then((d) => {
        setViews(d.count);
        // biome-ignore lint/suspicious/noConsole: allow
        console.log(`👀 ${d.count} people have viewed this page`);
      });
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-20">
      <header className="mb-24">
        <h1 className="font-medium text-foreground text-xl">Beau Hawkinson</h1>
        <p className="mt-1 text-secondary-foreground text-sm">Software Engineer</p>

        <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
          Building products with React, TypeScript, and modern web tooling. Currently at{" "}
          <a
            href="https://omni.dev/"
            target="_blank"
            rel="noopener noreferrer"
            // onClick={() => track("link:omni-text")}
            className="text-foreground underline decoration-faded-foreground underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Omni LLC
          </a>
          .
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-4">
          {socials.map(({ name, url }) => (
            <li key={name} className="rounded-full">
              <Link
                href={url}
                {...(!url.startsWith("mailto:") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                // onClick={() => track(`social:${name.toLowerCase()}`)}
              >
                <span>{name}</span>
                <ArrowUpRight />
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <section className="mb-24">
        <SectionHeading title="Current" />

        <a
          href="https://omni.dev/"
          target="_blank"
          rel="noopener noreferrer"
          // onClick={() => track("link:omni")}
          className="mb-10 flex w-full items-center gap-3 rounded-xl p-5 transition-colors hover:bg-muted/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <Image
            alt="Omni LLC"
            src="/omni.jpeg"
            height={200}
            width={200}
            className="h-9 w-9 rounded-md object-cover"
          />
          <div>
            <b className="text-foreground">
              Omni LLC
              <span className="ml-2 font-normal text-faded-foreground text-xs">
                {formatDuration("2024-08-01", "")}
              </span>
            </b>
            <p className="text-muted-foreground text-xs">Software Development Agency</p>
          </div>
        </a>

        {/* Client subsection */}
        <div className="mb-10">
          <div className="mb-4 ml-2">
            <h3 className="font-medium text-foreground">Client Work</h3>
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
              <h3 className="font-medium text-foreground">In-house Products</h3>
              <p className="mt-0.5 text-muted-foreground text-xs">
                Open-source products built by Omni
              </p>
            </div>
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
        <SectionHeading title="Projects" subtitle="Freelance work and personal projects" />

        <ul className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
