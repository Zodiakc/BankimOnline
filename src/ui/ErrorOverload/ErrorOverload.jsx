import Warning from "../../assets/WarningOctagon.svg";
const ErrorOverload = ({ message }) => {
    return (
        <div className=" bg-error py-[7px] px-[14px] rounded mt-3 flex gap-1 max-w-[325px] text-xs">
            <img src={Warning} className="max-w-[16px]"></img>
            {message}
        </div>
    );
};

export default ErrorOverload;
