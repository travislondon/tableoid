import background from '../images/tableoid.png'

export const Styles = {
    siteContainer: {
        background: `url(${background}) 50% 50% / contain no-repeat`,
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
        backgroundColor: 'cornsilk',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontHeader: {
        fontSize: 18
    },
    bold: {
        fontWeight: 'bolder' as 'bolder'
    },
    horizontalFill: {
        width: '100%'
    },
    iconButton: {
        borderStyle: 'none',
        borderWidth: 0,
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0
    }
}