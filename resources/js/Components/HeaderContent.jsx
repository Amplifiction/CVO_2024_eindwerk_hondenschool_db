import { Link, usePage } from "@inertiajs/react"

export default function HeaderContent ({}) {
    const { auth } = usePage().props

    return (
        <div className="grid-row just-between">
            <div className="xs-col-4 max-height-100p">
                <Link
                    href="/dashboard"
                >
                    <img src="/images/logo-nobg-white.png" alt="logo"/>
                </Link>
            </div>
            {auth.user && <>
                <div className="m-y-1 xs-col-4 flex-row align-center just-center">
                    {`Welkom, ${auth.user.first_name}.`}
                </div>
                <div className="xs-col-4 flex-row align-center just-end">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="btn-accent border-radius-50 padding-20p fs-150"
                    ><i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
                </div>
            </>}

            {/* <Link href="/editProfile">Profiel bewerken</Link> */}
            {/* <Link href="/editPassword">Wachtwoord wijzigen</Link> */}

        </div>
    )
}
