import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  staticImage: string;
  link: string;
  liveSiteUrl?: string;
  tags: string[];
  ribbonText?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  staticImage,
  link,
  liveSiteUrl,
  tags,
  ribbonText,
}: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {ribbonText && (
          <div className="absolute left-0 bottom-0 w-[700px] -translate-x-[15%] -translate-y-[100px] rotate-[-25deg] transform bg-yellow-400 px-8 py-3 text-center text-sm font-bold uppercase text-black shadow-md z-20 overflow-hidden">
            <div className="flex animate-ribbon-scroll whitespace-nowrap [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="mx-4">
                  {ribbonText}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="relative aspect-video">
          <Image
            src={isHovering ? image : staticImage}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-4">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
        {liveSiteUrl && (
          <Link
            href={liveSiteUrl}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Globe className="h-4 w-4" />
            Live Site
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
