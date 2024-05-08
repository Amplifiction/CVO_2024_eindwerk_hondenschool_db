import { Link } from "@inertiajs/react";

export default function FormStandardButtons ({
    title,
    processing,
}) {
    return (
        <div>
            <input disabled={processing} type="submit" value={title} />
            <Link href="/" as="button">Annuleren</Link>
        </div>
    )
}
