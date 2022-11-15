import RightBar from "../Components/RightBar";
import SearchBar from "../Components/SearchBar";
import LeftBar from "../Components/LeftBar"
import MyAssets from "../Components/MyAssets";
import SpotTrading from "../Components/SpotTrading";


function Home() {
    return (
        <div className="flex flex-row">
            <LeftBar />
            <div className="w-full flex flex-row">
                <div className="flex flex-col w-full">
                    <SearchBar />
                    <MyAssets />
                    <SpotTrading />
                </div>
                <RightBar />
            </div>
        </div>
    );
}

export default Home;