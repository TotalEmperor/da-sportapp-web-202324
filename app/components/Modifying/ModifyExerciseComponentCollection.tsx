"use client"
import getFirestoreDocument from "@/firebase/firestore/getData";
import React, {Suspense, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import ExerciseManager from "@/components/MainComponents/ExerciseManager";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import {useContextData} from "@/context/ContextData";
import LoadingModule from "@/components/loadingModule";
import {useRouter} from "next/navigation";

export default function ModifyExerciseComponentCollection(setName: any) {
    const [user, setuser] = useState(() => {
        // if a user is already logged in, use the current user object, or `undefined` otherwise.
        try {
            return getAuth().currentUser.uid || undefined;
        } catch (e) {
            console.log(e)
        }
    });
    const [userdata, setuserdata] = useState([]);
    const [time, setTime] = useState(0);
    const [numSets, setNumSets] = useState(0);
    const {day, week, setDay, setWeek} = useContextData();

    const router = useRouter();


// keeps `userdata` up to date

    useEffect(() => {
        if (user === null) {
            setuserdata(null); // <-- clear data when not logged in

            return;
        }

        if (!user) {
            // user still loading, do nothing yet
            return;
        } else {
            const unsubscribe = getFirestoreDocument('exercises', user, (data) => {
                if (data) {
                    getExercises(data, setName.setName, day, week).then((exercisesData) => {
                        if (exercisesData) {
                            setuserdata(exercisesData.objArray);
                            setTime(exercisesData.time)
                            setNumSets(exercisesData.numSets)
                        }

                    }).catch(() => {
                        router.push("/modifying")
                    })
                }
            });


            return () => {
                unsubscribe();
            };
        }


    }, [user, day, week]); // <-- rerun when user changes

    return (
        <>
            <Suspense>
                <>
                    <div className={"w-full overflow-y-scroll flex flex-col items-center my-2 px-3"}>
                        <div className="flex w-full bg-gray-100 dark:bg-gray-700 rounded-xl mb-4 p-3 items-center">
                            <span className={"w-[20%]"}>
                                <Link
                                    className="hover:bg-gray-200 rounded-full p-3 dark:hover:bg-gray-400"
                                    href="/modifying">
                                    <ArrowBackIcon/>
                                </Link>
                            </span>
                            <span
                                className="font-bold ms-4 w-full justify-center flex text-4xl">{setName.setName}</span>
                            <span className={"w-[20%]"}></span>
                        </div>
                        <div className={'w-[80%] my-2 mx-10 flex overflow-y-scroll'}>
                            <div
                                className={"w-full h-fit flex flex-col items-center justify-center p-[2px] rounded-xl z-50 dark:bg-gray-400 dark:bg-opacity-80"}>
                                {(
                                    userdata.map((data: any, index) => (
                                        <div key={index} className={"sm:w-[-webkit-fill-available]"}>
                                            <ExerciseManager
                                                data={data}
                                                time={data[1].time}
                                                stars={data[1].stars}
                                                description={data[1].description}
                                                style={"m-0 p-0"}
                                                image={data[1].image}
                                                moves={data[1].moves}
                                                setName={setName.setName}
                                                modify={true}
                                            />
                                            {
                                                data[1].breakTime != 0 ?
                                                    <span
                                                        className={"flex items-center rounded-2xl justify-center dark:text-black text-2xl font-bold h-20"}>{data[1].breakTime} Sec. Break</span>
                                                    :
                                                    <></>
                                            }
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </>
            </Suspense>
        </>
    )
}

const getExercises = async (data: any, setName: string, day: string, week: string) => {

    let objArray: any[] = [];
    let time = 0;
    let numSets = 0;


    if (day) {
        objArray = objArray.concat(Object.entries(data.exercises[week][day][setName]))
        const exerciseSet = data.exercises[week][day][setName];
        for (const exerciseName in exerciseSet) {
            time += parseInt(exerciseSet[exerciseName].time);
        }
    }


    return {objArray, time, numSets};

};


