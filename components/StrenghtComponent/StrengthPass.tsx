import { useContext } from "react";
import Appcontext from "../../context/AppContext";

export function StrengthPass() {
  const { Upper, Symbol, Lower, Number, rangeValue } = useContext(Appcontext);

  const Range = parseInt(rangeValue);

  var BlockStyle1 = "block border border-white w-[6px] h-4";
  var BlockStyle2 = "block border border-white w-[6px] h-4";
  var BlockStyle3 = "block border border-white w-[6px] h-4";
  var BlockStyle4 = "block border border-white w-[6px] h-4";

  if (Upper === true && Range > 5) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Lower === true && Range > 5) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Number === true && Range > 5) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Symbol === true && Range > 5) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }

  if (Upper === true && Range > 8 && Lower === true) {
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Upper === true && Range > 8 && Number === true) {
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Upper === true && Range > 8 && Symbol === true) {
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Number === true && Range > 8 && Symbol === true) {
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Lower === true && Range > 8 && Symbol === true) {
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Lower === true && Range > 8 && Number === true) {
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }

  if (Upper === true && Range > 12 && Lower === true && Number === true) {
    BlockStyle3 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Symbol === true && Range > 12 && Lower === true && Number === true) {
    BlockStyle3 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }
  if (Upper === true && Range > 12 && Symbol === true && Number === true) {
    BlockStyle3 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }

  if (
    Upper === true &&
    Range > 16 &&
    Lower === true &&
    Number === true &&
    Symbol === true
  ) {
    BlockStyle4 = "block border border-white w-[6px] h-4 bg-emerald-400 ";
  }

  return (
    <div className="bg-gray-900 flex items-center justify-between p-4">
      <h1 className="text-gray-600">STRENGHT</h1>

      <div className="flex gap-1">
        <div className={BlockStyle1}></div>

        <div className={BlockStyle2}></div>

        <div className={BlockStyle3}></div>

        <div className={BlockStyle4}></div>
      </div>
    </div>
  );
}
