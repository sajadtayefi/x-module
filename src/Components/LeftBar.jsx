import { SliderItems } from "../constant/SliderItems";
import { FiCircle } from "react-icons/fi"
import { IoExitOutline } from "react-icons/io5"



function LeftBar() {
    return (
        <div className="flex list-none bg-black w-20 flex-col items-center justify-center h-[100vh]  ">
            <li className=" flex justify-center items-center mt-10 mb-auto w-10 h-10 hover:bg-gray-500 rounded-xl">
                <FiCircle size={22} color="white" />
            </li>
            {SliderItems.map((i) => {
                return (
                    <li className="h-10 my-5 w-10 flex justify-center items-center hover:bg-gray-500 rounded-xl" key={i.id} >
                        {i.icon}
                    </li>
                )
            })}
            <li className=" mb-10 flex justify-center items-center mt-auto w-10 h-10 hover:bg-gray-500 rounded-xl">
                <IoExitOutline size={22} color="white" />
            </li>
        </div>
    );
}

export default LeftBar;