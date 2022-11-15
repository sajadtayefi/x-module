import { IoIosArrowDown } from "react-icons/io";
import { VscSettings } from "react-icons/vsc"
import Btn from "./common/Btn";
import Chart from "./common/Chart";
import Tokens from "./common/Tokens";

function SpotTrading() {
    return (
        <div className="flex flex-col w-11/12 mx-auto">
            <div className="flex flex-row pt-10  justify-end">
                <h2 className="font-semibold text-2xl mr-auto">
                    SpotTrading
                </h2>
                <Btn
                    textCname={"font-medium"}
                    cname={"rounded-lg w-36 flex flex-row justify-center items-center bg-slate-100 h-10"}
                    text={"Category"}
                    icon={<IoIosArrowDown className="ml-2 " />}
                />
                <Btn
                    textCname={"font-medium"}
                    cname={"rounded-lg w-36 ml-5 flex flex-row justify-center items-center bg-slate-100 h-10"}
                    text={"Algorithm"}
                    icon={<IoIosArrowDown className="ml-2 " />}
                />
                <Btn
                    textCname={"font-medium"}
                    cname={"rounded-lg w-36 ml-5 flex flex-row justify-center items-center bg-slate-100 h-10"}
                    text={"Category"}
                    icon={<VscSettings size={20} className="rotate-90  ml-2 " />}
                />
            </div>
            <div className="flex flex-row">
                <Tokens />
                <Chart />
            </div>

        </div>
    );
}

export default SpotTrading;