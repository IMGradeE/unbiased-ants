import Image from "next/image";

export default function Home() {
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex flex-col sm:flex-row gap-4">
              <h1 className={"text-2xl mb-0 pb-0 "}>This is the personal website for Payton Wilkes, a software engineer from Utah with an appreciation for minimalism.</h1><div className={"text-xs my-auto"}>(and the color brown)</div>
          </div>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
           <b>You can do one of two things on this site:</b>
          <li className="mb-2 tracking-[-.01em]">
            You can use this site to learn more about me via "Resume".
          </li>
          <li className="tracking-[-.01em]">
              You can use it to contact me directly via "Contact Me".
          </li>
        </ol>
      </main>
    </div>
  );
}
