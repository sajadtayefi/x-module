function Btn({ cname, textCname, text, iconCname, icon }) {
    return (
        <button className={cname}>
            <h4 className={textCname}>
                {text}
            </h4>
            <span className={iconCname}>
                {icon}
            </span>

        </button>
    );
}

export default Btn;