import { HiOutlineBell } from "react-icons/hi"
import { CiSearch } from "react-icons/ci"
import profile from "../Assets/icon/download.jpg"
import { IoIosArrowDown } from "react-icons/io"


function SearchBar() {
    return (
        <div className="w-full h-24 border shadow-sm flex flex-row justify-center items-center ">
            <div className="flex flex-row  justify-start items-center h-24 w-full px-5">
                <CiSearch size={24} />
                <input placeholder="search cryptocurrency,news,etc." className=" justify-self-start h-10 outline-none w-full mx-5" type="text" />
                <HiOutlineBell className="ml-auto" size={24} />
            </div>
            <div className="w-40 border-l flex flex-row justify-evenly items-center">
                <img className=" w-16 h-16  " src={profile} alt="" />
                <IoIosArrowDown />
            </div>
        </div>
        
    );
}

export default SearchBar;