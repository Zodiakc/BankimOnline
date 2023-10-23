//Блок с уведомлением после первоначального взноса и платежа
import WarningImg from "../../assets/Warning.svg";
const Warning = ({ warning, mt }) => {
    return (
        <div className="w-[325px] rounded bg-field pl-[14px] pr-[90px] py-2 text-xs flex gap-1 mt-4">
            <img src={WarningImg} />
            <p>{warning}</p>
        </div>
    );
};

export default Warning;
