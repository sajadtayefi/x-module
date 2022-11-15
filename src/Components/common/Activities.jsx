import ActivitiesCard from "./ActivitiesCard";
import { ActivitiesItems } from "../../constant/ActivitiesItems";


function Activities() {
    return (
        <div className=" flex justify-between flex-col w-[80%] ">
            <div className="flex flex-row justify-between">
                <h4 className=" text-sm font-semibold">
                    Activities
                </h4>
                <span className=" text-xs">
                    View all
                </span>
            </div>
            {ActivitiesItems.map((i, index) => {
                return (
                    <div className="my-4 " key={index}>
                        <ActivitiesCard
                            cname={i.cname}
                            picture={i.picture}
                            name={i.name}
                            benefit={i.benefit}
                            username={i.username}
                            total={i.total}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default Activities;