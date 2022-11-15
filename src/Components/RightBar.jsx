import Activities from "./common/Activities";
import Profile from "./common/Profile";
import TotalBalance from "./common/TotalBalance";

function RightBar() {
    return (
        <div className=" flex flex-col justify-start items-center w-[400px] border">
            <Profile />
            <TotalBalance />
            <Activities />
        </div>
    );
}

export default RightBar;