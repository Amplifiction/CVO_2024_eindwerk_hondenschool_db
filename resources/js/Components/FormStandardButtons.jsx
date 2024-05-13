import { Link } from "@inertiajs/react";

export default function FormStandardButtons ({
    title,
    processing,
}) {
    return (
        <div className="flex-row just-between m-y-1">
            <input disabled={processing} type="submit" value={title} className="btn-green" />
            <Link href="/" as="button" className="btn-gray">Annuleren</Link>
        </div>
    )
}
