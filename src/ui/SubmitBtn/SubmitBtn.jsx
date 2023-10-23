const SubmitBtn = ({ children, form, dirty, isValid }) => {
    return (
        <button
            type="submit"
            className="px-[74px] py-[17px] font-medium  rounded-lg enabled:bg-accent enabled:text-dark disabled:bg-field disabled:text-unchosenText"
            disabled={!(isValid && dirty)}
        >
            {children}
        </button>
    );
};

export default SubmitBtn;
