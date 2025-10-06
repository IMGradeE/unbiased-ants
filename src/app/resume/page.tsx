import {CVSect} from "@/app/ui/resume/CVSect";
import {projects, WorkHistory, Education} from "@/app/lib/staticData";
import {CVElement} from "@/app/ui/resume/cvElement";


export default function Resume() {
    return (
        <div className="flex flex-col gap-2 mx-auto w-2/3">
            <CVSect title={"Work Experience"} />
            {WorkHistory.map((experience) => {
                return(
                    <div key ={experience.label + experience.title} className={"flex flex-row gap-4"}>
                        <CVElement item={experience}/>
                    </div>
                )
            })}
            <CVSect title={"Education"} />
            {Education.map((education) => {
                return(
                    <div key ={education.label + education.title} className={"flex flex-row gap-4"}>
                        <CVElement item={education}/>
                    </div>
                )
            })}
            <CVSect title={"Languages/Tech"} />
            <CVSect title={"Projects"} />
            {projects.map((project) => {
                return(
                    <div key ={project.title + project.label} className={"flex flex-row gap-4"}>
                        <CVElement item ={project} />
                    </div>
                )
            })}
            <CVSect title={"Skills"}/>
        </div>
    )
}