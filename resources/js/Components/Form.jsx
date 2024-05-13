export default function Form ({onSubmit, children, header=''}) {
    return (

        <div className="">
            <h1>{header}</h1>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
        //TO DO, eventueel: FormStandardButtons integreren.
    )
}
