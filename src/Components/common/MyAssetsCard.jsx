function MyAssetsCard({ icon, brand, benefitIcon, benefit, number, total, background, backgroundicon, benefitcname }) {
    return (
        <div className={`${background} flex flex-col w-[320px] px-10 pt-5 pb-8 rounded-xl mt-10 `}>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-center items-center">
                    <div className={`${backgroundicon} w-10 h-10 rounded-xl flex justify-center items-center`}>
                        {icon}
                    </div>
                    <h5 className="ml-3 text-xl font-semibold">
                        {brand}
                    </h5>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <div className={`${benefitcname} mr-3`}>
                        {benefitIcon}
                    </div>
                    <h5 className={`${benefitcname} font-semibold`}>
                        {benefit}
                    </h5>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-3 items-end">
                <h2 className="font-semibold text-3xl ">
                    {number}
                </h2>
                <h5 className="font-semibold">
                    {total}
                </h5>
            </div>
        </div>
    );
}

export default MyAssetsCard;