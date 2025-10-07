'use client'

import Form from "next/form";
import {CreateMessage, messageFormState} from "@/app/lib/actions";
import {useActionState} from "react";
import {geistMono} from "@/app/ui/fonts";
import {SideInput} from "@/app/ui/contact/SideInput";
/*TODO add client side message history through local storage, conditionally render a link to the message history*/
/*TODO Label checkbox yes when true, no when false*/
// todo Why does specifying the width only work inline? using tailwind doesn't work!
//      Add bank of placeholders to select from randomly on page load.
//      Add logic to clear the form
//      Add logic to cache the form when navigating away
//      Add character limits to inputs
//      Set up action to send message to database



export type SideInputType = {
    label: string,
    type: string,
    name: string,
    placeholder?: string,
    options?: string[],
    maxLength?: number,
    required?: boolean,
    value?: string,
}

/* TABLE DEFINITION
    subject varchar(64) not null,
    message text not null,
    email varchar(64) not null,
    name varchar(64),
    type int not null,
    company varchar(64),
    urgent boolean not null default false,
    timestamp timestamp default current_timestamp,
* */

export default function Contact() {
    const initialState: messageFormState = {message: null, errors: undefined};
    const [state, formAction, pending] = useActionState(CreateMessage, initialState)
    const buttonClass = "py-2 px-6 my-2 rounded-md";
    const inputs: SideInputType[] = [
        {
            label: "Subject",
            type: "text",
            name: "subject",
            placeholder: "\"Following up on ...\"",
            maxLength: 64,
            required: true
        },
        {
            label: "Type of Inquiry",
            type: "select",
            name: "inquiryType",
            options: ["Personal", "Professional", "Employment Offer", "Other"]
        },
        {
            label: "Name",
            type: "text",
            name: "name",
            placeholder: "Yours?",
            maxLength: 64,
            required: true
        },
        {
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "example@ofemail.com",
            maxLength: 64,
            required: true
        },
        {
            label: "Company",
            type: "text",
            name: "company",
            placeholder: "If Applicable",
            maxLength: 64
        },
        {
            label: "Is this message urgent? ",
            type: "checkbox",
            name: "urgent"
        }
    ];

    let i = 0; // todo uuid

    return (

            <Form action={formAction} className="flex flex-col gap-4 md:w-3/4 sm:w-full md:mx-auto">
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="md:w-1/4 flex flex-col gap-4">
                        {inputs.map((input) => {
                            ++i;
                            return (
                                <SideInput key={i} attrs={input}
                                           className={`pl-1 pr-2 ${geistMono.className} focus:outline-0 border-b-1 border-b-gray-400 text-end ${(input.type === "checkbox") ? "" : "grow"}`}
                                           labelClassName={`pl-2 pr-6`}/>
                            )
                        })}
                    </div>
                    <textarea
                        className="md:w-3/4 flex grow sm:w-full border-1 resize-none border-gray-300 rounded-md p-2 bg-radial from-amber-50/50 to-zinc-100/25 to-100% outline-0"
                        name="message"
                        placeholder="We've been trying to reach you about your vehicle's extended warranty..."/>
                </div>
                <div className="flex md:flex-row flex-col justify-between gap-5 basis-3/4">
                    <div className={`flex md:flex-row flex-col md:grow ${geistMono.className} ${buttonClass}`}>
                        {state?.message && <p>{state.message}</p>}
                        {state?.errors !== undefined && <p> {JSON.stringify(state.errors)}</p>}
                    </div>
                    <button type="submit" className={`${buttonClass} bg-amber-50`}>Submit</button>
                </div>
            </Form>

    )
}