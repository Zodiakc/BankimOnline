import { useState } from "react";
import ErrorOverload from "../ErrorOverload/ErrorOverload";
import Arrow from "../../assets/Arrow.svg";
import SelectedArrow from "../../assets/SelectedArrow.svg";
import Search from "../../assets/Search.svg";
const Dropdown = ({
    header,
    options,
    error,
    name,
    setFieldValue,
    value,
    touched,
    withSearch,
}) => {
    // Стили для nput вынес в переменные
    const inputStyles =
        "bg-field  rounded-[6px] w-[325px] px-[35px]  py-[12px]  relative max-h-[48px] overflow-hidden leading-8";
    const inputErrStyles =
        "border-2 border-error bg-field rounded-[6px] w-[325px] px-[35px] py-[12px]  relative max-h-[48px] overflow-hidden leading-8";
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [filteredOptions, setFilteredOptions] = useState("");
    return (
        <div className="flex flex-col">
            <label>{header}</label>

            <div>
                <div
                    className={error && touched ? inputErrStyles : inputStyles}
                >
                    {value ? value : "Выберите ответ"}
                    {/* Стрелочка, по нажатию открываем dropdown */}
                    <img
                        src={Arrow}
                        alt="arrow"
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                        className={
                            openMenu
                                ? "absolute  rotate-180 translate-y-[-50%] top-1/2 right-[26px]	cursor-pointer duration-500"
                                : "absolute right-[26px] translate-y-[-50%] top-1/2 cursor-pointer duration-500"
                        }
                    />
                </div>
                {/* Устанавливаем value в общей форме, при клике на каждый элемент */}
                <div
                    className={
                        openMenu
                            ? "block mt-2 w-[345px] max-h-[216px] overflow-y-auto overscroll-y-contain "
                            : "hidden"
                    }
                >
                    <ul className="bg-field rounded-lg  ">
                        {withSearch && (
                            <div className="relative">
                                <img
                                    src={Search}
                                    alt="search"
                                    className="absolute translate-y-[-50%] top-1/2 left-[16px]"
                                />
                                <input
                                    className="bg-search rounded-[5px] w-[300px] my-[9px] ml-[12px] py-[10px] pr-[16px] pl-[45px]"
                                    placeholder="Поиск.."
                                    onChange={(e) => {
                                        setFilteredOptions(e.target.value);
                                    }}
                                />
                            </div>
                        )}
                        {options.map((option) => (
                            <div
                                key={option.id}
                                onClick={() =>
                                    console.log(
                                        option.title.includes(filteredOptions)
                                    )
                                }
                            >
                                {option.title.includes(filteredOptions) && (
                                    <li
                                        className="bg-field px-4 py-3.5 hover:opacity-50 relative cursor-pointer first:rounded-lg "
                                        onClick={() => {
                                            setFieldValue(name, option.title);
                                            setOpenMenu(false);
                                            setSelectedOption(option.title);
                                        }}
                                    >
                                        {option.title}
                                        {/* Стрелочка, отмеченный option */}
                                        {option.title === selectedOption && (
                                            <img
                                                src={SelectedArrow}
                                                alt="selectedArrow"
                                                className="absolute translate-y-[-50%] top-1/2 right-4"
                                            />
                                        )}
                                    </li>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            {error && touched ? <ErrorOverload message={error} /> : ""}
        </div>
    );
};

export default Dropdown;
