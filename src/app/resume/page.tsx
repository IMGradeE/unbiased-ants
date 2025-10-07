import {CVSect} from "@/app/ui/resume/CVSect";
import {projects, WorkHistory, Education, skills} from "@/app/lib/staticData";
import {CVElement} from "@/app/ui/resume/cvElement";


export default function Resume() {
    return (
        <div className="flex flex-col gap-2 lg:mx-auto lg:w-2/3 w-full sm:px-2">
            <div>
                <CVSect title={"Experience"} />
                {WorkHistory.map((experience) => {
                    return(
                        <div key ={experience.label + experience.title} className={"flex flex-row gap-4 bg-amber-50/10 rounded-md md:px-2"}>
                            <CVElement item={experience}/>
                        </div>
                    )
                })}
            </div>
            <div>
                <CVSect title={"Education"} />
                {Education.map((education) => {
                    return(
                        <div key ={education.label + education.title} className={"flex flex-row gap-4 bg-amber-50/10 rounded-md md:px-2"}>
                            <CVElement item={education}/>
                        </div>
                    )
                })}
            </div>
           <div>
               <CVSect title={"Projects"} />
               {projects.map((project) => {
                   return(
                       <div key ={project.title + project.label} className={"flex flex-row gap-4 bg-amber-50/10 rounded-md md:px-2"}>
                           <CVElement item ={project} />
                       </div>
                   )
               })}
           </div>
            <CVSect title={"Skills"}/>
            <div className={"mb-10"}>
                <ul className={"list-disc lg:list-outside list-inside lg:px-0 px-2"}>
                    {skills.map((skill) => {
                        return <li className={""} key={skill}>{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}