import background from '../images/tableoid.png'

export const Styles = {
    siteContainer: {
        background: `url(${background}) 50% 0% / contain no-repeat`,
        backgroundPosition: 'center top',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        width: '100vw'
    },
    columnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' as 'column'
    },
    fixedWidthContainer: {
        width: '75vw'
    },
    tableContainer: {
        position: 'relative' as 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' as 'column',
        top: '25vh',
        maxWidth: '50vw',
    },
    fontHeader: {
        fontSize: 18
    },
    bold: {
        fontWeight: 'bolder' as 'bolder'
    },
    horizontalFill: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row' as 'row',
        width: '100%',
    },
    iconButton: {
        borderStyle: 'none',
        borderWidth: 0,
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0
    },
    table: {
        backgroundColor: 'cornsilk',
    },
    searchInput: {
        width: 250
    },
    searchContainer: {
        padding: 5
    }
}