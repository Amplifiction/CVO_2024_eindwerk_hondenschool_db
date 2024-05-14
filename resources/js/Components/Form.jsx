export default function Form ({
    onSubmit,
    children,
    header='',
    subheader=''
}) {
    return (

        <div>
            <h1 className="txt-center fc1">{header}</h1>
            <div className="txt-center fc1">{subheader}</div>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
        //FormStandardButtons integreren is geen optie. (Varieert te fel per form.)
    )
}
