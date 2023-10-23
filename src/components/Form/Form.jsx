import { useDispatch, useSelector } from "react-redux";
import SubmitBtn from "../../ui/SubmitBtn/SubmitBtn";
import TextInput from "../../ui/TextInput/TextInput";
import { ErrorMessage, useFormik } from "formik";
import { formSchema } from "../../validations/FormSchema";
import Dropdown from "../../ui/Dropdown/Dropdown";
import Warning from "../../ui/Warning/Warning";
import { replaceInitialState } from "../../store/formSlice";
const Form = () => {
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();
    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isValid,
        dirty,

        setFieldValue,
    } = useFormik({
        initialValues: form,
        onSubmit: (values) => {
            if (isValid) {
                // Dispatch-ем действие `replaceInitialState`.
                dispatch(replaceInitialState(values));
                localStorage.setItem("values", JSON.stringify(values));
                console.log(form);
            }
        },
        validationSchema: formSchema,
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="py-[33px] ">
                <div className="flex flex-wrap gap-9 sm:gap-[74px]  sm:flex-row sm:items-start items-center flex-col">
                    <TextInput
                        value={values.propertyValue}
                        onChange={handleChange}
                        id="propertyValue"
                        name="propertyValue"
                        error={errors.propertyValue}
                        touched={touched}
                        header="Стоимость недвижимости"
                    />
                    <Dropdown
                        name="purchaseCity"
                        id="purchaseCity"
                        onChange={handleChange}
                        error={errors.purchaseCity}
                        header="Выберите город"
                        options={[
                            { id: 1, title: "Тель-авив" },
                            { id: 2, title: "Акко" },
                            { id: 3, title: "Ариэль" },
                        ]}
                        setFieldValue={setFieldValue}
                        value={values.purchaseCity}
                        withSearch={true}
                    ></Dropdown>
                    <Dropdown
                        name="mortgageDate"
                        id="mortgageDate"
                        onChange={handleChange}
                        error={errors.mortgageDate}
                        header="Когда вы планируете оформить ипотеку?"
                        options={[
                            { id: 1, title: "В ближайший месяц" },
                            { id: 2, title: "В ближайший 2 месяца" },
                            { id: 3, title: "В ближайший 3 месяца" },
                            { id: 4, title: "В ближайший 6 месяцев" },
                        ]}
                        setFieldValue={setFieldValue}
                        value={values.mortgageDate}
                    ></Dropdown>
                </div>
                <div className="flex flex-wrap gap-9 sm:gap-[74px] mt-[40px] sm:flex-row sm:items-start items-center flex-col">
                    <TextInput
                        value={values.initialPayment}
                        onChange={handleChange}
                        id="initialPayment"
                        name="initialPayment"
                        error={errors.initialPayment}
                        touched={touched}
                        header="Первоначальный взнос"
                        dependantValue={values.propertyValue}
                        warning="Cумма финансирования:500,000 ₪
                        Процент финансирования:50%"
                        rangePar={{
                            min: String(values.propertyValue / 4),
                            max: String(values.propertyValue),
                            step: "1000",
                        }}
                        hint={
                            <div className="text-sm">
                                <p>
                                    Основная квартира: у заемщика нет квартиры
                                    ставка финансирования
                                </p>
                                <p>Максимум до 75%</p>
                                <br></br>
                                <p>
                                    Альтернативная квартира: Для заемщика
                                    квартира, которую он обязуется продать в
                                    течение двух лет ставка финансирования
                                </p>
                                <p>Максимум до 70%</p>
                                <br></br>
                                <p>
                                    Вторая квартира или выше: у заемщика уже
                                    есть ставка финансирования квартиры
                                </p>
                                <p>Максимум до 50%</p>
                            </div>
                        }
                        setFieldValue={setFieldValue}
                    />

                    <Dropdown
                        name="propertyType"
                        id="propertyType"
                        onChange={handleChange}
                        error={errors.propertyType}
                        header="Тип недвижимости"
                        options={[
                            { id: 1, title: "Квартира от застройщика" },
                            { id: 2, title: "Квартира на вторичном рынке" },
                            { id: 3, title: "Частный дом" },
                            {
                                id: 4,
                                title: "Земельный участок / Строительство",
                            },
                            {
                                id: 5,
                                title: "Коммерческая недвижимость",
                            },
                        ]}
                        setFieldValue={setFieldValue}
                        value={values.propertyType}
                    ></Dropdown>
                    <Dropdown
                        name="propertyOwnership"
                        id="propertyOwnership"
                        onChange={handleChange}
                        error={errors.propertyOwnership}
                        header="Вы уже владеете недвижимостью?"
                        options={[
                            {
                                id: 1,
                                title: "Нет, я пока не владею недвижимостью",
                            },
                            {
                                id: 2,
                                title: "Да, у меня уже есть недвижимость в собственности",
                            },
                            { id: 3, title: "Частный дом" },
                            {
                                id: 4,
                                title: "Я собираюсь продать единственную недвижимость в ближайшие два года, чтобы использовать полученный капита для приобретения новой",
                            },
                            {
                                id: 5,
                                title: "Коммерческая недвижимость",
                            },
                        ]}
                        setFieldValue={setFieldValue}
                        value={values.propertyOwnership}
                    ></Dropdown>
                </div>
                {/* Линия с помощью блока div */}
                <div className="border-t-[1px] border-field my-[38px]"></div>
                <div className="flex flex-wrap gap-9 sm:gap-[74px] sm:flex-row sm:items-start items-center flex-col ">
                    <TextInput
                        value={values.period}
                        onChange={handleChange}
                        id="period"
                        name="period"
                        error={errors.period}
                        touched={touched}
                        header="Срок ипотеки"
                        setFieldValue={setFieldValue}
                        rangePar={{
                            max: "30",
                            min: "4",
                            step: "1",
                            titles: { min: "4 года", max: "30 лет" },
                        }}
                        rangeDependValue={{
                            title: "monthlyPayment",
                            value: values.monthlyPayment,
                        }}
                    />
                    <TextInput
                        value={values.monthlyPayment}
                        onChange={handleChange}
                        id="monthlyPayment"
                        name="monthlyPayment"
                        error={errors.monthlyPayment}
                        touched={touched}
                        header="Ежемесячный платеж"
                        setFieldValue={setFieldValue}
                        rangePar={{
                            max: "51130",
                            min: "2654",
                            step: "1",
                            titles: { min: "2,654 ₪", max: "51,130 ₪" },
                        }}
                        warning="Увеличьте ежемесячный платеж и переплачивайте меньше"
                    />
                </div>
            </div>
            {/* Линия с помощью блока div */}
            <div className="border-t-[1px] border-field absolute w-full left-0 my-[38px]"></div>
            <div className="flex md:justify-end mt-[72px] bg-dark justify-center">
                <SubmitBtn form={form} isValid={isValid} dirty={dirty}>
                    Продолжить
                </SubmitBtn>
            </div>
        </form>
    );
};

export default Form;
