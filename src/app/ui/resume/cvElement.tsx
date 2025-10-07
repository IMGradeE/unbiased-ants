import {cvElement} from "@/app/lib/types";

export const CVElement = ({item}:{item: cvElement}) => {
    return(
        <>
            <div className="flex flex-col md:w-1/8 w-1/6 italic font-semibold font-[geist-mono] px-2 md:px-0">
                {item.label}
            </div>
            <div className="flex flex-col grow px-6 md:px-0">
                <div className={"flex flex-row justify-between"}>
                    <div className={"font-bold"}>{item.title}</div>
                    {item?.link && <a href={item.link}>Source Code</a>}
                    {item?.endDate && item?.startDate && item.institution === undefined && <p className={"text-end"}>{item.startDate}&#8594;{item.endDate}</p>}
                    {item?.institution && <p className={"font-semibold text-sm text-end"}>{item.institution}</p>}
                </div>
                {item?.endDate && item?.startDate && item?.institution &&
                    <>
                        <div className={"flex flex-row justify-between"}>
                            <p>Started:</p><p className={"text-end"}>{item.startDate}</p>
                        </div>
                        <div className={"flex flex-row justify-between"}>
                            <p>Completed:</p><p className={"text-end"}>{item.startDate}</p>
                        </div>
                    </>
                }
                {item?.result && item?.resultLabel &&
                    <div className={"flex flex-row justify-between"}>
                        <p className={""}>{item?.resultLabel}</p> <p className={"text-end"}>{item?.result}</p>
                    </div>
                }
                {item?.description && <p className={"text-sm py-2"}>
                    {item.description}
                </p>}
            </div>
        </>

    )
}