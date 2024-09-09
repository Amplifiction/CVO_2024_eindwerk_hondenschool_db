import { Link, usePage } from "@inertiajs/react";

export default function FormStandardButtons ({
    title,
    processing,
}) {

    const { basePath } = usePage().props

    return (
        <div className="flex-row m-y-05">
            <input disabled={processing} type="submit" value={title} className="btn-green" />
            <Link
                href={`${basePath}/`} // TO DO: wijzigen naar vorige "pagina ipv dashboard"
                as="button"
                className="btn-gray"
            >Annuleren</Link>
        </div>
    )
}
