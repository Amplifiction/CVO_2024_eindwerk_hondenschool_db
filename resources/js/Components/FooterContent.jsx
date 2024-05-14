import { usePage } from "@inertiajs/react"

export default function FooterContent ({}) {
    const { website, facebook } = usePage().props

    return (
        <div className="grid-row just-between fs-90">
            <div className="xs-col-5 flex-col just-center">
                <a
                    href={website}
                    target="_blank"
                >De Roedel vzw</a>
                <p>&copy; 2024 Bart Stevens</p>
            </div>
            <div className="xs-col-2 flex-row align-center just-center fs-300 fc3">
                <i className="fa-solid fa-paw"></i>
            </div>
            <div className="xs-col-5 flex-row align-center just-end">
                <a href={facebook} target="_blank">
                    <button
                        className="btn-accent border-radius-50 padding-20px fs-150"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </button>
                </a>
            </div>
        </div>
    )
}
