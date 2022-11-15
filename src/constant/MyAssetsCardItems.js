import { TbArrowWaveRightDown, TbArrowWaveRightUp, TbBrandAirbnb } from "react-icons/tb";
import { SiWebmoney } from "react-icons/si"
import { FaBtc, FaEthereum } from "react-icons/fa"

export const MyAssetsCardItems = [
    {
        id: 1,
        background: " bg-blue-100",
        backgroundicon: "bg-blue-300",
        benefitcname: "text-blue-500",
        benefit: "+1.04%",
        benefitIcon: <TbArrowWaveRightUp size={20} className=" -rotate-45" />,
        total: "$10,470.91",
        number: "0.2213",
        brand: "BTC",
        icon: <FaBtc />,
    }
    ,
    {
        id: 2,
        background: " bg-yellow-100",
        backgroundicon: "bg-yellow-300",
        benefitcname: "text-yellow-500",
        benefit: "+1.51%",
        benefitIcon: <TbArrowWaveRightUp size={20} className=" -rotate-45" />,
        total: "$5,019.16",
        number: "1.5001",
        brand: "ETH",
        icon: <FaEthereum />,
    }
    ,
    {
        id: 3,
        background: " bg-red-100",
        backgroundicon: "bg-red-300",
        benefitcname: "text-red-500",
        benefit: "-0.43%",
        benefitIcon: <TbArrowWaveRightDown size={20} className=" rotate-45" />,
        total: "$480.09",
        number: "5.1210",
        brand: "LUNA",
        icon: <SiWebmoney />,
    }
    ,
    {
        id: 4,
        background: "bg-green-100",
        backgroundicon: "bg-green-300",
        benefitcname: "text-green-500",
        benefit: "+3.00%",
        benefitIcon: <TbArrowWaveRightUp size={20} className=" -rotate-45" />,
        total: "$1362.29",
        number: "3.0921",
        brand: "BNB",
        icon: <TbBrandAirbnb />,
    }
]