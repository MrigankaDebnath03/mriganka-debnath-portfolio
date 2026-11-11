import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const dynamic = "force-static";

export function GET() {
  const content = [
    `# ${profile.name}`,
    "",
    `> ${profile.role} focused on backend systems, cloud architecture, and developer tooling.`,
    "",
    "## Profile",
    "",
    profile.summary,
    "",
    `Location: ${profile.location}`,
    `Email: ${profile.email}`,
    `Phone: ${profile.phone}`,
    `GitHub: ${profile.links.github}`,
    `LinkedIn: ${profile.links.linkedin}`,
    "",
    "## Education",
    "",
    `${profile.education.degree}, ${profile.education.institution} (${profile.education.dates}). CGPA: ${profile.education.cgpa}.`,
    `Coursework: ${profile.education.coursework.join(", ")}.`,
    "",
    "## Experience",
    "",
    ...experience.flatMap((item) => [
      `### ${item.organization} — ${item.role}`,
      `${item.dates} | ${item.location}`,
      item.summary,
      ...item.highlights.map((highlight) => `- ${highlight}`),
      "",
    ]),
    "## Projects",
    "",
    ...projects.flatMap((project) => [
      `### ${project.title}`,
      `Category: ${project.category}. Stack: ${project.stack.join(", ")}.`,
      project.summary,
      `Engineering challenge: ${project.challenge}`,
      ...project.details.map((detail) => `- ${detail}`),
      ...(project.demoUrl ? [`Live: ${project.demoUrl}`] : []),
      "",
    ]),
    "## Skills",
    "",
    ...skillGroups.map((group) => `- ${group.label}: ${group.items.join(", ")}`),
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
