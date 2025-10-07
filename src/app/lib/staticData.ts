import {cvElement} from "@/app/lib/types";

// { title: "", description: "", label: "", link: ""},
export const projects: cvElement[] = [
    { title: "Banking System", description: "A mock banking application I built in the individual portion of the second division software engineering course at WSU. Also my first experience with Node.", label: "JS", link: "https://github.com/IMGradeE/BankingSystem"}
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