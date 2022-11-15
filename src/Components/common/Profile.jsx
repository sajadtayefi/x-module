import profile from "../../Assets/icon/download.jpg"
import { TfiClose } from "react-icons/tfi"

function Profile() {
    return (
        <div className=" flex flex-col justify-center items-center pb-8">
            <div className="flex w-8 h-8 justify-center items-center rounded-full bg-slate-100 self-end my-8 cursor-pointer">
                <TfiClose />
            </div>
            <div className="relative bg-slate-300 w-[260px] h-[100px] rounded-md ">
                <img className="absolute w-24 rounded-full left-20 top-14 bottom-0 " src={profile} alt="" />
            </div>
            <div className="flex flex-col text-center mt-14">
                <h2 className="text-2xl">
                    Alex Polo
                </h2>
                <p>
                    apolo@gmail.com
                </p>
            </div>
            <button className=" border-blue-300 border-2 p-2 w-60 rounded-xl mt-5 text-blue-300 font-bold">
                0x12543562...da484
            </button>
        </div>
    );
}

export default Profile;