export default function Form ({
    onSubmit,
    children,
    header='',
    subheader=''
}) {
    return (

        <div>
            <h1 className="txt-center">{header}</h1>
            <div className="txt-center">{subheader}</div>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
        //FormStandardButtons integreren is geen optie. (Varieert te fel per form.)
    )
}
