// wrapper for NavLinks
import NavLinks from "./NavLinks";

// todo styling
// todo home button
// todo sticky header

export default function HeaderNav() {
    return (
        <div className="w-full flex items-end pt-2 sticky md:gap-40 lg:px-4 px-1 top-0 z-10 bg-transparent">
            <div className="grow"></div>
            <NavLinks/>
        </div>
    )
}
