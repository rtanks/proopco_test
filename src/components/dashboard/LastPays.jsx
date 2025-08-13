import { useState } from "react";

export default function LastPays() {
    const [counter, setCounter] = useState(3)
    const lastPay = [
        {type: "چالش 5k کاستوم", price: 120.06, time: "1404-05-17"},
        {type: "چالش 25k کاستوم", price: 201.15, time: "1404-05-17"},
        {type: "چالش 5k کاستوم", price: 106, time: "1404-05-15"},
        {type: "چالش 10k کاستوم", price: 518, time: "1404-05-15"},
        {type: "چالش 5k کاستوم", price: 196, time: "1404-05-15"},
        {type: "چالش 25k کاستوم", price: 991.28, time: "1404-05-13"}
    ];

    
    return(
        <div className="w-full md:3/5 h-80 flex flex-col gap-2 rounded-lg text-white bg-[#151515] px-4 py-5">
            <h2 className="text-sm">آخرین پرداخت های پراپکو</h2>
            <div className="w-full h-4/5 rounded-lg border-1 border-[#a973] overflow-hidden">
                <table className="table-fixed border-collapse bg-[#111] w-full h-full text-xs text-white">
                    <thead className="bg-[#fff2] border-b-1 border-[#a973]">
                        <tr className="w-full h-1/4 px-2">
                            <th className="text-center w-1/3">نوع چالش</th>
                            <th className="text-center w-1/3">مبلغ تسویه</th>
                            <th className="text-center w-1/3">زمان تراکنش</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="w-full h-1/4 border-b-1 border-[#a973] px-2">
                            <td className="text-sm text-center w-1/3">{lastPay[counter - 3].type}</td>
                            <td className="text-sm text-center w-1/3">{lastPay[counter - 2].price}$</td>
                            <td className="text-sm text-center w-1/3">{lastPay[counter - 1].time}</td>
                        </tr>
                        <tr className="w-full h-1/4 border-b-1 border-[#a973] px-2">
                             <td className="text-sm text-center w-1/3">{lastPay[counter - 3].type}</td>
                             <td className="text-sm text-center w-1/3">{lastPay[counter - 2].price}$</td>
                             <td className="text-sm text-center w-1/3">{lastPay[counter - 1].time}</td>
                        </tr>
                        <tr className="w-full h-1/4 border-b-1 border-[#a973] px-2">
                            <td className="text-sm text-center w-1/3">{lastPay[counter - 3].type}</td>
                            <td className="text-sm text-center w-1/3">{lastPay[counter - 2].price}$</td>
                            <td className="text-sm text-center w-1/3">{lastPay[counter - 1].time}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-full h-8 flex justify-between items-center gap-1 px-1">
                <div className="text-gray-300 text-xs">{counter / 3} از {(lastPay.length % 3) == 0 ? lastPay.length / 3: (lastPay.length / 3) + 1}</div>
                <div className="w-24 h-8 flex justify-end items-center gap-1 px-1">
                    <button onClick={() => setCounter(prev => prev - 3)} className="rounded-lg py-1 px-2 text-white disabled:text-gray-400 text-xs bg-[#fff2]" disabled={counter == 3}>قبلی</button>
                    <button onClick={() => setCounter(prev => prev + 3)} className="rounded-lg py-1 px-2 text-white disabled:text-gray-400 text-xs bg-[#fff2]" disabled={counter == lastPay.length}>بعدی</button>
                </div>
            </div>
        </div>
    )
}