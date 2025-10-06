import {projects} from "@/app/lib/staticData";
import {CVElement} from "@/app/ui/resume/cvElement";

export default function Projects() {
    // todo get projects from database and render each one in a component, add detail view with breadcrumbs?
    // todo pagination
    // { title: "", description: "", language: "", link: ""}

    return (
        <>
            {projects.map((project) => {
                return(
                    <div className={"flex flex-row gap-4 w-2/3 mx-auto py-4"}>
                        <CVElement key={project.title} item={project} />
                    </div>

                )
            })}
        </>
    )
}