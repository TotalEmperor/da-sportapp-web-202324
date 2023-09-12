import styles from "./home.module.css"
import SetComponent from "@/components/SetComponent"
import SideNav from "@/components/SideNav";
import MainComponent from "@/components/mainComponent";
import ConfPanel from "@/components/confPanel";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import {useAuthContext} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import DateConfig from "@/components/dateConfig";

export default async function page() {
    return (
        <div className={ styles["contentWidth"] +" flex flex-col min-h-fit h-screen bg-[#F8FAF7]"}>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="icon"/>
            </Head>
            <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
                <SideNav username={"s"}/>
                <MainComponent>
                    <>
                        <SetComponent/>
                    </>
                </MainComponent>
                <ConfPanel>
                    <>
                        <DateConfig/>
                    </>
                </ConfPanel>
            </div>
        </div>
    );
}