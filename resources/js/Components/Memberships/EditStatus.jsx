import { useForm, usePage } from "@inertiajs/react"

export default function EditStatus ({membership, statuses}) {
    const { basePath } = usePage().props

    const { data, setData, put, processing, errors, setError } = useForm({
        status_id: membership.status_id,
    })
    const handleSubmit = (id) => {
        put(`${basePath}/memberships/${id}`)
        console.log(id)
        console.log(data.status_id)
    }

    return (
        <div>
            <div className="flex-row">
                {/* TO DO, eventueel: select converteren naar compo. Zie Select.jsx */}
                <select
                    id="status_id"
                    name="status_id"
                    value={data.status_id}
                    onChange={e => {
                        setError('status_id', '')
                        setData('status_id', e.target.value)
                    }}
                >
                    {statuses.map (status =>
                        <option
                            key={status.id}
                            value={status.id}
                        >{status.name}</option>
                    )}
                </select>
                <button
                    className="btn-accent"
                    onClick={() => handleSubmit(membership.id)}
                    disabled={processing}
                ><i className="fa-regular fa-floppy-disk"></i></button>
            </div>
            {errors.status_id &&
                <div className="error">{errors.status_id}</div>
            }
        </div>
    )
}
