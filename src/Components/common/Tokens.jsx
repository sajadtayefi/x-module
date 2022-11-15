import { coins, TokensItems } from "../../constant/TokensItems";
function Tokens() {
    return (
        <div className="mt-5 border p-2 w-1/3  rounded-xl">
            <div className="bg-slate-100 flex flex-row py-1 px-3 rounded-lg justify-between mt-5   ">
                {coins.map((i) => {
                    return (
                        <div className={`${i?.cname} mx-1 rounded-lg px-2`} key={i.id}>
                            {i.name}
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col">
                {TokensItems.map((i) => {
                    return (
                        <div className="flex flex-row justify-between  font-semibold p-2 rounded-md hover:bg-slate-200">
                            <span className="flex flex-row w-10 ">
                                {i.id}
                            </span>
                            <h3 className="mr-auto flex flex-row w-20 justify-start items-center ">
                                {i.name}
                                {i.icon}
                            </h3>
                            <h3 className="flex flex-row w-32 items-center justify-end">
                                {i.price}
                                {i.icon}
                            </h3>
                            <h4 className={`${i.cname} w-20 ml-20`}>
                                {i.change}
                            </h4>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Tokens;