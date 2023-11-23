"use client"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/images/hope.svg';
import styles from "../(routes)/workout/workout.module.css";
import TimerIcon from "@mui/icons-material/Timer";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountDropdown from "@/components/AccountDropdown";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import React,{useState} from "react";

export default function SideNav() {

    const [activeButton, setActiveButton] = useState('/workout');

    return (
            <div className={styles["w-left-fixed"] + " w-full flex-shrink flex-grow-0 px-4"}>
                <div
                    className={styles["w-left-panel"] + " sticky top-0 sm:p-4 rounded-xl w-full h-full bg-[#F3F6EB] min-w-fit flex flex-col"}>
                    <div className="flex-col justify-center items-center mb-[15%] mt-[15%] hidden sm:flex">
                        <Image src={Logo} alt="Logo" priority={true}/>
                    </div>
                    <div className="flex flex-col sm:mt-[20%] items-center min-w-fit">
                        <ul className="flex sm:flex-col overflow-hidden justify-center content-center w-[75%] min-w-fit">
                            <li className={`py-2 my-1 rounded-3xl hover:bg-[#d9e7cb] ${activeButton === '/workout' ? 'bg-[#d9e7cb]' : ''}`}>
                                <Link href="/workout" prefetch onClick={() => setActiveButton('/workout')}>
                                    <TimerIcon className={styles["icons"]+" fill-black dark:fill-none sm:mx-2 mx-4 inline"}></TimerIcon>
                                    <span className="hidden sm:inline font-medium text-[1.5rem]">Workout</span>
                                </Link>
                            </li>
                            <li className={`py-2 my-1 rounded-3xl hover:bg-[#d9e7cb] ${activeButton === '/modifying' ? 'bg-[#d9e7cb]' : ''}`}>
                                <Link className="truncate" href="/modifying" onClick={() => setActiveButton('/modifying')}>
                                    <FitnessCenterIcon className={styles["icons"] + " sm:mx-2 mx-4 inline"}></FitnessCenterIcon>
                                    <span className="hidden sm:inline font-medium text-[1.5rem]">Modifying</span>
                                </Link>
                            </li>
                            <li className={`py-2 my-1 rounded-3xl hover:bg-[#d9e7cb] ${activeButton === '/calculate' ? 'bg-[#d9e7cb]' : ''}`}>
                                <Link className="" href="#" prefetch onClick={() => setActiveButton('/calculate')}>
                                    <BarChartIcon className={styles["icons"] + " sm:mx-2 mx-4 inline"}></BarChartIcon>
                                    <span className="hidden sm:inline font-medium text-[1.5rem] w-fit">Calc. Counter</span>
                                </Link>
                            </li>
                            <li className={`py-2 my-1 rounded-3xl hover:bg-[#d9e7cb] ${activeButton === '/settings' ? 'bg-[#d9e7cb]' : ''}`}>
                                <Link href={`/settings/${"Account"}`} prefetch={true} onClick={() => setActiveButton('/settings')}>
                                    <SettingsOutlinedIcon className={styles["icons"] + " sm:mx-2 mx-4 inline"}/>
                                    <span className="hidden sm:inline font-medium text-[1.5rem]">Settings</span>
                                </Link>
                            </li>
                            <li className="mt-[50%]">
                                <AccountDropdown/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
