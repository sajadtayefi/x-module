import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { MyAssetsCardItems } from "../constant/MyAssetsCardItems"
import MyAssetsCard from "./common/MyAssetsCard";
import Btn from "./common/Btn";

function MyAssets() {
    return (
        <div className=" w-11/12 flex flex-col mx-auto">
            <div className="flex flex-row w-full justify-end items-center mt-10 ">
                <h2 className=" text-2xl font-semibold mr-auto">
                    My Assets
                </h2>
                <Btn
                    cname={" rounded-lg w-36 flex flex-row justify-center items-center bg-slate-100 h-10"}
                    textCname={"font-medium"}
                    text={"24h change"}
                    icon={<IoIosArrowDown className="ml-2 " />}
                />
                <Btn
                    cname={"ml-5 rounded-lg flex flex-row justify-center items-center w-36 h-10 bg-blue-500 text-white "}
                    textCname={""}
                    text={"Add more"}
                    icon={<AiOutlinePlus className="ml-2" />}
                />
            </div>
            <div className="flex flex-row justify-between w-full ">
                {MyAssetsCardItems.map((i) => {
                    return (
                        <MyAssetsCard
                            key={i.id}
                            background={i.background}
                            icon={i.icon}
                            benefit={i.benefit}
                            total={i.total}
                            brand={i.brand}
                            benefitIcon={i.benefitIcon}
                            number={i.number}
                            backgroundicon={i.backgroundicon}
                            benefitcname={i.benefitcname}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default MyAssets;