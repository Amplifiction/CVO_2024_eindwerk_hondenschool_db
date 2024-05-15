import { usePage } from "@inertiajs/react";
import { useState } from "react"
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import FilterInput from "../FilterInput";

export default function IndexAllMs ({allMs, contactModalEvent}) {
    const { website } = usePage().props

    const [firstNameFilter, setFirstNameFilter] = useState('')
    let ms_firstName = allMs
    if (firstNameFilter !== '') {
        ms_firstName = allMs.filter(ms => ms.user.first_name.toLowerCase().includes(firstNameFilter.toLowerCase()))
    }

    const [lastNameFilter, setLastNameFilter] = useState('')
    let ms_lastName = ms_firstName
    if (lastNameFilter !== '') {
        ms_lastName = ms_firstName.filter(ms => ms.user.last_name.toLowerCase().includes(lastNameFilter.toLowerCase()))
    }

    const [discNameFilter, setDiscNameFilter] = useState('')
    let ms_discName = ms_lastName
    if (discNameFilter !== '') {
        ms_discName = ms_lastName.filter(ms => ms.discipline.name.toLowerCase().includes(discNameFilter.toLowerCase()))
    }

    const [dogNameFilter, setDogNameFilter] = useState('')
    let ms_dogName = ms_discName
    if (dogNameFilter !== '') {
        ms_dogName = ms_discName.filter(ms => ms.dog.name.toLowerCase().includes(dogNameFilter.toLowerCase()))
    }

    const [dateBeforeFilter, setDateBeforeFilter] = useState('')
    let ms_dateBefore = ms_dogName
    if (dateBeforeFilter !== '') {
        ms_dateBefore = ms_dogName.filter(ms => new Date(dateBeforeFilter) <= new Date(ms.start_date) )
    }

    const [dateAfterFilter, setDateAfterFilter] = useState('')
    let ms_dateAfter = ms_dateBefore
    if (dateAfterFilter !== '') {
        ms_dateAfter = ms_dateBefore.filter(ms => new Date(dateAfterFilter) >= new Date(ms.start_date) )
    }

    const [statusFilter, setStatusFilter] = useState('')
    let ms_status = ms_dateAfter
    if (statusFilter !== '') {
        ms_status = ms_dateAfter.filter(ms => ms.status.name.toLowerCase().includes(statusFilter.toLowerCase()))
    }


    const finalMs = ms_status

    return (
        <div className="m-y-3">
            <h2>Alle lidmaatschappen</h2>
            <p className="m-y-1 fs-90">(Typ in een veld om te filteren. Datumformaat: jjjj-(m)m-dd.)</p>
            <div>
                {/* <TableHeader>
                    <div className="xs-col-3">
                        Voornaam<br/>
                        Achternaam
                    </div>
                    <div className="xs-col-3">
                        Discipline<br/>
                        Hond
                    </div>
                    <div className="xs-col-3">
                        Startdatum
                    </div>
                    <div className="xs-col-3">Status</div>
                </TableHeader> */}
                <TableHeader>
                    <div className="xs-col-6 l-col-3">
                        <FilterInput
                            value={firstNameFilter}
                            onChange={(e) => setFirstNameFilter(e.target.value)}
                            placeholder="Voornaam"
                        />
                        <br/>
                        <FilterInput
                            value={lastNameFilter}
                            onChange={(e) => setLastNameFilter(e.target.value)}
                            placeholder="Achternaam"
                        />
                    </div>
                    <div className="xs-col-6 l-col-3">
                        <FilterInput
                            value={discNameFilter}
                            onChange={(e) => setDiscNameFilter(e.target.value)}
                            placeholder="Discipline"
                        />
                        <br/>
                        <FilterInput
                            value={dogNameFilter}
                            onChange={(e) => setDogNameFilter(e.target.value)}
                            placeholder="Hondennaam"
                        />
                    </div>
                    <div className="xs-col-6 l-col-3">
                        <FilterInput
                            value={dateBeforeFilter}
                            onChange={(e) => setDateBeforeFilter(e.target.value)}
                            placeholder="Minimale startdatum"
                        />
                        <br/>
                        <FilterInput
                            value={dateAfterFilter}
                            onChange={(e) => setDateAfterFilter(e.target.value)}
                            placeholder="Maximale startdatum"
                        />
                    </div>
                    <div className="xs-col-6 l-col-3">
                        {/* <div className="fs-90 flex-row just-center align-center m-xy-1">datumformaat jjjj-(m)m-dd</div> */}
                        <FilterInput
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            placeholder="Status"
                        />
                    </div>
                </TableHeader>
                {finalMs.length<1
                ? <p>Geen lidmaatschappen gevonden.</p>
                : <>
                    {finalMs.map(ms => (
                        <TableRow
                            key={ms.id}
                        >
                            <div className="xs-col-6 l-col-3">
                                <button
                                    onClick={() => contactModalEvent(ms.user)}
                                    className="btn-as-link"
                                >{`${ms.user.first_name}`}</button><br/>
                                <button
                                    onClick={() => contactModalEvent(ms.user)}
                                    className="btn-as-link"
                                >{`${ms.user.last_name}`}</button><br/>
                            </div>
                            <div className="xs-col-6 l-col-3">
                                <a href= {`${website}${ms.discipline.url_name}`} target="_blank">{ms.discipline.name}</a><br/>
                                {ms.dog.name}
                            </div>
                            <div className="xs-col-6 l-col-3">
                                {ms.start_date}
                            </div>
                            <div className="xs-col-6 l-col-3">{ms.status.name}</div>
                        </TableRow>
                    ))}
                </>}
            </div>
        </div>
    )
}
