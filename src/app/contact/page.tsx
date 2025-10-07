'use client'

import {CreateMessage, messageFormState} from "@/app/lib/actions";
import {useActionState, useEffect, useRef} from "react";
import {geistMono, geistSans} from "@/app/ui/fonts";
import {SideInput} from "@/app/ui/contact/SideInput";
/*TODO add client side message history through local storage, conditionally render a link to the message history*/
/*TODO Label checkbox yes when true, no when false*/
// todo Why does specifying the width only work inline? using tailwind doesn't work!
//      Add bank of placeholders to select from randomly on page load.
//      Add logic to clear the form
//      Add logic to cache the form when navigating away

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

export default function Contact() {
    const initialState: messageFormState = {message: null, errors: undefined};
    const [state, formAction, pending] = useActionState(CreateMessage, initialState)
    const dialogRef = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const buttonClass = "py-2 px-6 my-2 rounded-md";
    const closeButtonRef = useRef<HTMLButtonElement>(null);
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
 // todo make error/success message a modal
    let i = 0; // todo uuid

    useEffect(() => {
        if (state?.message || state?.errors) {
            dialogRef.current?.showModal();
            // Reset form on success
            if (!state?.errors && formRef.current) {
                formRef.current.reset();
            }
            // Focus the close button for accessibility
            setTimeout(() => closeButtonRef.current?.focus(), 0);
        }
    }, [state]);

    const handleCloseDialog = () => {
        dialogRef.current?.close();
    };

    const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        // Close dialog when clicking on backdrop
        const dialogElement = dialogRef.current;
        if (dialogElement && e.target === dialogElement) {
            handleCloseDialog();
        }
    };
    return (
        <>
            <form ref={formRef} action={formAction} className="sm:w-3/4 w-full sm:mx-auto sm:my-8">
                <h1 className={`text-start text-2xl my-4 hidden sm:block ${geistSans.className}`}>Message Form</h1>
                <p className={`${geistSans.className} text-start mb-4 hidden sm:block text-zinc-800/70`}>All messages are posted directly to my PostgreSQL database, and my typical response time is ~48 hours.</p>
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="md:w-1/3 w-full flex flex-col gap-4">
                        {inputs.map((input) => {
                            ++i;
                            return (
                                <SideInput key={i} attrs={input}
                                           className={`pl-1 pr-2 flex ${geistMono.className} focus:outline-0 border-b-1 border-b-gray-400  ${(input.type === 'checkbox') ? '' : 'grow'} text-end lg:text-end sm:text-start`}
                                           labelClassName={`flex md:pl-1 mb-0 md:mb-0 sm:mb-1  pl-2 pr-6  md:py-0`}/>
                            )
                        })}
                    </div>
                    <textarea
                        className="md:w-2/3 flex grow w-full border-1 md:resize-none  border-gray-300 rounded-md p-2 bg-radial from-amber-50/50 to-zinc-100/25 to-100% outline-0"
                        name="message"
                        required={true}
                        placeholder="We've been trying to reach you about your vehicle's extended warranty..."/>
                </div>
                <div className="flex md:flex-row flex-col justify-between gap-5 basis-3/4">
                    <div className={`flex md:flex-row flex-col md:grow shrink`}>
                    </div>
                    <button type="submit" className={`${buttonClass} bg-amber-50`} disabled={pending}>Submit</button>
                </div>
            </form>

            <dialog
                ref={dialogRef}
                onClick={handleDialogClick}
                className="backdrop:bg-black/50 rounded-lg shadow-2xl border-0 p-0 max-w-md w-full mx-auto my-auto fixed"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <div className={`flex flex-col p-6 bg-gradient-to-br from-amber-100/30 to-amber-200/30`}>
                    <div className="flex items-start justify-between gap-4">
                        {state?.message && (
                            <p className={`text-lg`}>
                                {state.message}
                            </p>
                        )}
                        <button
                            ref={closeButtonRef}
                            onClick={handleCloseDialog}
                            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-black/5"
                            aria-label="Close dialog"
                            type="button"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div id="dialog-description">
                        {state?.errors && (
                            <div className={`mt-4 p-4 bg-white rounded-md border border-red-200 ${geistMono.className}`}>
                                <p className="font-semibold text-red-800 mb-2 text-sm">Details:</p>
                                <pre className="whitespace-pre-wrap text-xs text-red-600 overflow-auto max-h-48">
                                    {JSON.stringify(state.errors, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>

                </div>
            </dialog>
        </>
    )
}
