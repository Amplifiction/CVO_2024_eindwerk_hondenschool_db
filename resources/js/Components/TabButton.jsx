export default function TabButton ({onClick, active, children}) {
    const classes = `tabButton ${active ? 'activeTabButton' : ''}`

    return (
        <button
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    )
}
