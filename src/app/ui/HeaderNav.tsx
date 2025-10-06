// wrapper for NavLinks
import NavLinks from "./NavLinks";

// todo styling
// todo home button

export default function HeaderNav() {
    return (
        <div className="w-full flex items-end md:gap-40 my-2 px-4">
            <div className="grow"></div>
            <NavLinks/>
        </div>
    )
}
