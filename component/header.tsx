import React from 'react'
import { HiBarsArrowUp, HiMoon } from "react-icons/hi2";
import { AiOutlineWarning, AiFillFlag } from "react-icons/ai";


function Headeer() {
    return (
        <div className="grid grid-cols-6 gap-4 bg-slate-900">
            <div className="col-start-1 flex justify-center">
                {/* <HiBarsArrowUp className="text-2xl bg-slate-900" /> */}
            </div>
            <div className="col-start-2 col-span-4 flex justify-center"><input type='text' style={{ border: "2px solid black " }} /></div>
            <div className="col-start-3 flex">
                {/* <HiMoon className="text-2xl bg-slate-900" />
                <AiOutlineWarning className="text-2xl bg-slate-900" />
                <AiFillFlag className="text-2xl bg-slate-900" /> */}
            </div>
            <div className="col-start-1 col-end-3 ...">02</div>
            <div className="col-end-7 col-span-2 ...">03</div>
            <div className="col-start-1 col-end-7 ...">04</div>
        </div>
    )
};

export default Headeer; 