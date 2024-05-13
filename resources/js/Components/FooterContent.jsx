import { Link } from "@inertiajs/react"

export default function FooterContent ({}) {
    return (
        <div className="grid-row just-between fs-90">
            <div className="xs-col-5 flex-col just-center">
                <a
                    href="https://www.hondenschoolderoedel.be/"
                    target="_blank"
                >De Roedel vzw</a>
                <p>&copy; 2024 Bart Stevens</p>
            </div>
            <div className="xs-col-2 flex-row align-center just-center fs-300 fc3">
                <i className="fa-solid fa-paw"></i>
            </div>
            <div className="xs-col-5 flex-row align-center just-end">
                <button
                    href="https://www.facebook.com/hondenschoolderoedelhelchteren/"
                    target="_blank"
                    className="btn-accent border-radius-50 padding-20p fs-150"
                >
                    <a href="https://www.facebook.com/hondenschoolderoedelhelchteren/" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                </button>
            </div>
        </div>
    )
}
