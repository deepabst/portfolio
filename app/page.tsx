"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import { NavBar } from "@/components/NavBar";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  DEE PABST
                </h1>
                <h2 className="text-1xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">
                  Software Engineer
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Charismatic team player with expertise in front-end and full
                  stack development, experimentation, and software quality. I
                  thrive on solving problems and delighting users. My secret
                  sauce? Effective collaboration with designers, product
                  managers, and teammates to go from ideation to launch. From
                  crafting A/B tests that optimize conversion rates to leading
                  initiatives to improve software reliability, I bring a blend
                  of technical skill, innovation, and cross-functional teamwork
                  to every project.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/deepabst" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/deepabst/"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:deepabst@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Top Prioridee"
                description="A real-time 3d task management application."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Three-fiber"]}
              />
              <ProjectCard
                title="Galaxy Generator"
                description="Become the creator of your own galaxy."
                staticImage="/galaxy-generator.png?height=400&width=600"
                image="/galaxy-generator.gif?height=400&width=600"
                liveSiteUrl="https://galaxy-generator-steel.vercel.app/"
                link="https://github.com"
                tags={["Three.js", "Vercel"]}
              />
              <ProjectCard
                title="Physics Generator"
                description="Fun with gravity, boxes and spheres."
                staticImage="/physics-generator.png?height=400&width=600"
                image="/physics-generator.gif?height=400&width=600"
                liveSiteUrl="https://22-physics-orpin.vercel.app/"
                link="https://github.com"
                tags={["Three.js", "Vercel"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025-present Dee Pabst.
          </p>
        </div>
      </footer>
    </div>
  );
}
