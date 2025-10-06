import {cvElement} from "@/app/lib/types";

export const CVElement = ({item}:{item: cvElement}) => {
    return(
        <>
            <div className="flex flex-col w-1/8 italic font-semibold font-[geist-mono]">
                {item.label}
            </div>
            <div className="flex flex-col grow ">
                <div className={"flex flex-row justify-between"}>
                    <div className={"font-bold"}>{item.title}</div>
                    {item?.link && <a href={item.link}>Source Code</a>}
                    {item?.endDate && item?.startDate && item.institution === undefined && <p>{item.startDate}&#8594;{item.endDate}</p>}
                    {item?.institution && <p className={"font-semibold text-sm"}>{item.institution}</p>}
                </div>
                {item?.endDate && item?.startDate && item?.institution &&
                    <>
                        <div className={"flex flex-row justify-between"}>
                            <p>Started:</p><p>{item.startDate}</p>
                        </div>
                        <div className={"flex flex-row justify-between"}>
                            <p>Completed:</p><p>{item.startDate}</p>
                        </div>
                    </>
                }
                {item?.result && item?.resultLabel &&
                    <div className={"flex flex-row justify-between"}>
                        <p>{item?.resultLabel}</p> <p>{item?.result}</p>
                    </div>
                }
                {item?.description && <p className={"text-sm py-2"}>
                    {item.description}
                </p>}
            </div>
        </>

    )
}