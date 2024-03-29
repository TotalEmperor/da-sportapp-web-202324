
export default function ConfPanel({children}:{children: React.ReactNode}){

    return(
        <div className={"w-right-fixed max-w-[-webkit-fill-available] sm:w-full m-5 flex justify-center flex-shrink flex-grow-0"}>
            <div className="flex flex-col items-center w-full">
                {children}
            </div>
        </div>
    )
}