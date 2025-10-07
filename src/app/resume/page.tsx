import {CVSect} from "@/app/ui/resume/CVSect";
import {projects, WorkHistory, Education} from "@/app/lib/staticData";
import {CVElement} from "@/app/ui/resume/cvElement";


export default function Resume() {
    return (
        <div className="flex flex-col gap-2 md:mx-auto md:w-2/3 w-full sm:px-2">
            <CVSect title={"Work Experience"} />
            {WorkHistory.map((experience) => {
                return(
                    <div key ={experience.label + experience.title} className={"flex flex-row gap-4 bg-amber-50/10 rounded-md md:px-2"}>
                        <CVElement item={experience}/>
                    </div>
                )
            })}
            <CVSect title={"Education"} />
            {Education.map((education) => {
                return(
                    <div key ={education.label + education.title} className={"flex flex-row gap-4 bg-amber-50/10 rounded-md md:px-2"}>
                        <CVElement item={education}/>
                    </div>
                )
            })}
            <CVSect title={"Languages/Tech"} />
            <CVSect title={"Projects"} />
            {projects.map((project) => {
                return(
                    <div key ={project.title + project.label} className={"flex flex-row gap-4 bg-amber-50/10 rounded-md md:px-2"}>
                        <CVElement item ={project} />
                    </div>
                )
            })}
            <CVSect title={"Skills"}/>
        </div>
    )
}