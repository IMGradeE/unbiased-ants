import {cvElement} from "@/app/lib/types";

// { label: "", title: "", link: "", description: ""},
export const projects: cvElement[] = [
    { label: "TS", title: "This Website", link: "{https://github.com/IMGradeE/unbiased-ants", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt congue, nisl nisl tincidunt nisl, eget tincidunt nisl nisl eget nisl."},
    { label: "C++", title: "Arithmetic Compiler", link: "https://github.com/IMGradeE/CompilersSpr2025", description: "A compiler for a custom language which compiles source programs consisting of integer arithmetic expressions with literals and named variables to NASM."},
    { title: "Banking System", description: "A mock banking application I built in the individual portion of the second division software engineering course at WSU. Also my first experience with Node.", label: "JS", link: "https://github.com/IMGradeE/BankingSystem"},
    { label: "C", title: "Process Scheduling Simulator", link: "https://github.com/IMGradeE/SchedulingSimulator", description: "A CLI program written in C that simulates the behavior of a process scheduler."},
]
// { label: "", title: "", startDate: "", endDate: "", description: "" },
export const WorkHistory: cvElement[] = [
    { label: "Outlier", title: "Software Engineer", startDate: "4/25", endDate: "9/25", description: "Design and implement features in full-stack web applications according to client requirements." },
    { label: "Instacart", title: "Delivery Driver", startDate: "2/22", endDate: "4/25", description: "Fulfill on-demand orders for groceries and other commodities at local retailers and deliver them to customers within the agreed upon time frame" },
]
// {label: "", title: "", institution: "", startDate: "", endDate: "", result: "", resultLabel: ""}
export const Education: cvElement[] = [
    {label: "BS", title: "Computer Science", institution: "Weber State University", startDate: "1/22", endDate: "4/25", result: "3.52", resultLabel: "GPA: "},
    {label: "AAS", title: "Computer Science", institution: "Weber State University", startDate: "1/22", endDate: "12/24", result: "3.54", resultLabel: "GPA: "},
    {label: "Member", title: "American Mensa", institution: "MENSA", result: "GAI 135", resultLabel: " Qualifying Score (WAIS-V):"}
]

export const skills = [
    "Proficient in C++, SQL, JavaScript, and TypeScript.",
    "Familiar with Node.js, React, and Next.js.",
    "Natural aptitude for advanced Computer Science topics, specifically Graph Theory and ML/AI concepts."
]