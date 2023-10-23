import ErrorOverload from "../ErrorOverload/ErrorOverload";
import Currencies from "../../assets/Currencies.svg";
import Hint from "../../assets/Hint.svg";
import { useState } from "react";
import Warning from "../Warning/Warning";
const TextInput = ({
    header,
    value,
    onChange,
    id,
    name,
    error,
    setFieldValue,
    touched,
    dependantValue,
    hint,
    warning,
    rangePar,
    rangeDependValue,
}) => {
    ///Вынес в отдельные переменные, чтобы не писать много в самом Classname
    const inputStyles =
        "bg-field px-[25px] py-[15px] rounded-[6px] w-[325px] max-h-[48px] overflow-hidden ";
    const inputErrStyles =
        "border-2 border-error bg-field px-[25px] py-[15px] rounded-[6px] w-[325px] max-h-[48px] overflow-hidden ";
    // Функция форматирования значения
    const formatValue = (value) => {
        const formattedValue = value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return formattedValue;
    };
    // Стейт по состоянию блока подсказки
    const [showHint, setShowHint] = useState(false);
    return (
        <div className="flex flex-col relative">
            {hint ? (
                <div className="flex gap-[9px] relative">
                    <label>{header}</label>
                    <img
                        src={Hint}
                        className="max-w-[20px] cursor-pointer group"
                        onMouseEnter={() => setShowHint(true)}
                        onMouseLeave={() => setShowHint(false)}
                    />

                    {showHint && (
                        <div className="bg-hint max-w-[266px] max-h-[308px] rounded p-[10px] absolute z-10 right-[-40%] top-6 overflow-auto">
                            {hint}
                        </div>
                    )}
                </div>
            ) : (
                <label>{header}</label>
            )}
            <div className="flex flex-col gap-[17px]">
                <div className="relative">
                    <input
                        className={error ? inputErrStyles : inputStyles}
                        defaultValue={
                            dependantValue ? dependantValue / 2 : value
                        }
                        onChange={onChange}
                        id={id}
                        name={name}
                        value={value}
                    />
                    {rangePar && (
                        <>
                            <input
                                className=" absolute bottom-0 left-0 appearance-none w-full h-1 bg-accent rounded outline-none slider-thumb "
                                id="range"
                                type="range"
                                name="range"
                                min={rangePar.min}
                                max={rangePar.max}
                                step={rangePar.step}
                                value={value}
                                onChange={(e) => {
                                    if (rangeDependValue) {
                                        setFieldValue(
                                            rangeDependValue.title,
                                            value
                                        );
                                        setFieldValue(name, e.target.value);
                                    } else {
                                        setFieldValue(name, e.target.value);
                                    }
                                }}
                            />
                            {rangePar.titles && (
                                <div className="flex  justify-between w-[325px] absolute">
                                    <p>{rangePar.titles.min}</p>
                                    <p>{rangePar.titles.max}</p>
                                </div>
                            )}
                        </>
                    )}

                    <img
                        src={Currencies}
                        alt="curr"
                        className="max-w-[20px] absolute translate-y-[-50%] top-1/2 right-6"
                    />
                </div>
                {warning && <Warning warning={warning} mt={"20px"} />}
            </div>
            {error && touched && <ErrorOverload message={error} />}
        </div>
    );
};

export default TextInput;
