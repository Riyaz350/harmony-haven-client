
const SubTitle = ({title, subTitle}) => {
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="border-b-4 lg:w-1/3 text-xl lg:text-3xl border-[#00a9a5]">{subTitle}</h1>
            <h1 className="border-b-4 lg:w-1/3 text-3xl lg:text-5xl font-bold border-[#00a9a5]">{title}</h1>

        </div>
    );
};

export default SubTitle;