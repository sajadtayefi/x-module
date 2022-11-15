import { BiDollar } from "react-icons/bi"
import { TbArrowWaveRightUp } from "react-icons/tb";

function TotalBalance() {
    return (
        <div className="bg-slate-200 px-10 py-5 rounded-xl mb-8">
            <div>
                <div className="flex flex-row justify-center items-center ">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-300 rounded-lg mr-5">
                        <BiDollar size={22} />
                    </div>
                    <h5 className="font-semibold">
                        Total Balance
                    </h5>
                </div>
                <h3 className="text-3xl font-semibold mt-2">
                    17,332.45
                </h3>
                <div className="flex justify-start flex-row items-center mt-2">
                    <TbArrowWaveRightUp size={22} className="text-blue-300 mr-5 -rotate-45" />
                    <span className="text-blue-300 font-bold text-sm">+3.21%</span>
                </div>
            </div>
        </div>
    );
}

export default TotalBalance;