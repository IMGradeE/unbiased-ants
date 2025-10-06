import {SideInputType} from "@/app/ui/contact/messageForm";

export const SideInput = ({attrs, className, labelClassName}: {attrs: SideInputType, className: undefined|string, labelClassName: undefined|string}) => {
    let k = 0;
    const inner = (attrs.type !== "select") ?
        (<input type={attrs.type} name={attrs.name} id={attrs.name} placeholder={attrs.placeholder} className={className} maxLength={attrs?.maxLength} required={attrs?.required}/>)
        :
        (<select name={attrs.name} id={attrs.name} className={className} defaultValue={1}>

            {attrs.options?.map((option) => (
                <option key={option} value={++k}>{option}</option>
            ))}
        </select>)
    return(
        <div className={"flex flex-row justify-between p-2 rounded-sm bg-amber-50/30"}>
            <label htmlFor={attrs.name} className={labelClassName}>{attrs.label}</label>
            {inner}
        </div>
    )
}