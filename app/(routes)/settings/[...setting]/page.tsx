import styles from "./settings.module.css"
import SideNav from "@/components/SideNav";
import MainComponent from "@/components/MainScreen/mainComponent";
import ConfPanel from "@/components/confPanel";
import Head from "next/head";
import Link from "next/link"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, {Suspense} from "react";
import getSettings from "./getSettings";

export default function page({params : {setting}} ) {
    return (
        <>
            <MainComponent>
                <>
                    <div className="flex flex-col w-full">
                        <div className="border-y-2 border-gray-500 flex flex-row justify-center items-center hover:bg-[#F5F3F3]">
                            <Link
                                href={`/settings/Account`}
                                aria-current="true"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-[#F5F3F3]">
                                Account
                            </Link>
                            <ArrowForwardIosIcon/>
                        </div>
                        <div className="border-b-2 border-gray-500 flex flex-row justify-center items-center hover:bg-[#F5F3F3]">
                            <Link
                                href={`/settings/General`}
                                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                                General
                            </Link>
                            <ArrowForwardIosIcon/>
                        </div>
                        <div className="border-b-2 border-gray-500 flex flex-row justify-center items-center hover:bg-[#F5F3F3]">
                            <Link
                                href={`/settings/Language`}
                                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                                Language
                            </Link>
                            <ArrowForwardIosIcon/>
                        </div>
                        <div className="border-b-2 border-gray-500 flex flex-row justify-center items-center hover:bg-[#F5F3F3]">
                            <Link
                                href="#!"
                                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                                Weight Units
                            </Link>
                            <ArrowForwardIosIcon/>
                        </div>
                    </div>
                </>
            </MainComponent>
            <ConfPanel>
                <Suspense>
                    {getSettings(setting)}
                </Suspense>
            </ConfPanel>
        </>
    );
}

