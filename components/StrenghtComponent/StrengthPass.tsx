import { useContext } from "react";
import Appcontext from "../../context/AppContext";

export function StrengthPass() {
  const { Upper, Symbol, Lower, Number, rangeValue } = useContext(Appcontext);

  const Range = parseInt(rangeValue);

  var BlockStyle1 = "block border border-white w-[6px] h-4";
  var BlockStyle2 = "block border border-white w-[6px] h-4";
  var BlockStyle3 = "block border border-white w-[6px] h-4";
  var BlockStyle4 = "block border border-white w-[6px] h-4";

  const settingsSet = [Upper, Lower, Number, Symbol];
  const SettingsChecked = settingsSet.filter(
    (setting) => setting === true
  ).length;

  if (SettingsChecked >= 1 && Range >= 5)
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-red-700 ";

  if (SettingsChecked >= 2 && Range >= 8) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-orange-700 ";
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-orange-700 ";
  }
  if (SettingsChecked >= 3 && Range >= 12) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-yellow-500 ";
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-yellow-500";
    BlockStyle3 = "block border border-white w-[6px] h-4 bg-yellow-500 ";
  }

  if (SettingsChecked >= 4 && Range >= 16) {
    BlockStyle1 = "block border border-white w-[6px] h-4 bg-emerald-500 ";
    BlockStyle2 = "block border border-white w-[6px] h-4 bg-emerald-500";
    BlockStyle3 = "block border border-white w-[6px] h-4 bg-emerald-500 ";
    BlockStyle4 = "block border border-white w-[6px] h-4 bg-emerald-500 ";
  }

  return (
    <div className="bg-gray-900 flex items-center justify-between p-4 ">
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
