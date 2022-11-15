function ActivitiesCard({ name, benefit, username, total, picture, cname }) {
    return (
        <div className=" flex flex-row justify-between items-center">
            <img className=" rounded-full w-10 mx-2" src={picture} alt="profile" />
            <div className="flex flex-col w-full">
                <div className=" flex flex-row justify-between w-full font-semibold">
                    <h4 className="">
                        {name}
                    </h4>
                    <span className={cname}>
                        {benefit}
                    </span>
                </div>
                <div className=" flex flex-row justify-between text-xs">
                    <h4 className=" ">
                        To: {username}
                    </h4>
                    <span>
                        {total}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ActivitiesCard;