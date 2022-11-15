import { ChartItems } from "../../constant/ChartItems";
import chartpic from "../../Assets/picture/2.png"
function Chart() {
    return (
        <div className="flex flex-row justify-end items-start w-2/3 border mt-5 ml-5 rounded-xl ">
            <div className="mt-5 flex flex-col items-center  mx-auto w-11/12">
                <div className="mt-5 flex flex-row justify-end items-center  mx-auto w-11/12">
                    <h2 className="mr-auto font-semibold text-lg">
                        USD/BTC
                    </h2>
                    <div className="bg-slate-100 flex flex-row py-1 px-3 rounded-lg justify-between    ">
                        {ChartItems.map((i) => {
                            return (
                                <div className={`${i?.cname} mx-1 rounded-lg px-2`} key={i.id}>
                                    {i.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img className="mt-5 rounded-xl w-[900px] h-[300px]" src={chartpic} alt="chart" />
            </div>
        </div>
    );
}

export default Chart;