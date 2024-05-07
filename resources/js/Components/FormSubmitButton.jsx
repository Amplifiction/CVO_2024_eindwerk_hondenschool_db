export default function FormSubmitButton ({
    title,
    processing,
}) {
    return (
        <div>
            <input disabled={processing} type="submit" value={title} />
        </div>
    )
}
