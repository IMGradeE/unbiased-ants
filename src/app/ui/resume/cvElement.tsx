import {cvElement} from "@/app/lib/types";
import {geistMono} from "@/app/ui/fonts";

export const CVElement = ({item}:{item: cvElement}) => {
    return(
        <>
            <div className="sm:w-1/8 w-1/6 italic font-semibold font-[geist-mono] px-2 md:px-0">
                {item.label}
            </div>
            <div className="flex flex-col sm:w-7/8 w-5/6 grow pl-6 pr-2 md:pl-0 md:pr-0">
                <div className={"flex flex-row justify-between"}>
                    <div className={"font-bold"}>{item.title}</div>
                    {item?.link && <a className={`${geistMono.className} text-sm`} href={item.link}>Source Code</a>}
                    {item?.endDate && item?.startDate && item.institution === undefined && <div className={`text-end ${geistMono.className}`}>{item.startDate}&#8594;{item.endDate}</div>}
                    {item?.institution && <div className={"font-semibold text-sm text-end"}>{item.institution}</div>}
                </div>
                {item?.endDate && item?.startDate && item?.institution &&
                    <>
                        <div className={"flex flex-row justify-between"}>
                            <div>Started:</div><div className={`text-end ${geistMono.className}`}>{item.startDate}</div>
                        </div>
                        <div className={"flex flex-row justify-between"}>
                            <div>Completed:</div><div className={`text-end ${geistMono.className}`}>{item.startDate}</div>
                        </div>
                    </>
                }
                {item?.result && item?.resultLabel &&
                    <div className={"flex flex-row justify-between"}>
                        <div className={""}>{item?.resultLabel}</div> <div className={`text-end ${geistMono.className}`}>{item?.result}</div>
                    </div>
                }
                {item?.description && <div className={"w-[100%] text-sm pt-1 mb-4"}>
                    {item.description}
                </div>}
            </div>
        </>

    )
}