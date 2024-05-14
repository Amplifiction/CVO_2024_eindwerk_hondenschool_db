import { Link, usePage } from "@inertiajs/react"

export default function HeaderContent ({}) {
    const { auth } = usePage().props

    return (
        <div className="grid-row just-between">
            <div className="xs-col-6 max-height-100p">
                {/* TO DO: link wordt op volledige div gezet. Waarom=?? */}
                <Link
                    href="/dashboard"
                >
                    <img src="/images/logo-nobg-white.png" alt="logo"/>
                </Link>
            </div>
            {auth.user && <>
                <div className="xs-col-6 flex-row align-center just-end">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="btn-accent border-radius-50 padding-20px fs-150"
                    ><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                </div>
            </>}
        </div>
    )
}
