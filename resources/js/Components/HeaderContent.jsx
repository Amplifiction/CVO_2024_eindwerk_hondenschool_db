import { Link, usePage } from "@inertiajs/react"

export default function HeaderContent ({}) {
    const { auth, BasePath } = usePage().props

    return (
        <div className="grid-row just-between">
            <div className="xs-col-6 max-height-100p">
                <Link
                    href={`${BasePath}/dashboard`}
                >
                    <img src="images/logo-nobg-white.png" alt="logo"/>
                </Link>
            </div>
            {auth.user && <>
                <div className="xs-col-6 flex-row align-center just-end">
                    <Link
                        href={`${BasePath}/logout`}
                        method="post"
                        as="button"
                        className="btn-accent border-radius-50 padding-20px fs-150"
                    ><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                </div>
            </>}
        </div>
    )
}
