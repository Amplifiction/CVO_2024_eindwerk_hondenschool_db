import { Link, usePage } from "@inertiajs/react";

export default function FormStandardButtons ({
    title,
    processing,
}) {

    const { basePath } = usePage().props

    return (
        <div className="flex-row m-y-1">
            <input disabled={processing} type="submit" value={title} className="btn-green" />
            <Link href={`${basePath}/`} as="button" className="btn-gray">Annuleren</Link>
        </div>
    )
}
