import React from 'react';

const Icon = () => {
    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: '50px',
    };

    const cardStyle: React.CSSProperties = {
        textAlign: 'center',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const iconStyles: React.CSSProperties = {
        marginBottom: '10px',
    };
    const iconListStyle = {
        listStyle: 'none',
        textAlign: 'center',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    };

    const iconStyle: React.CSSProperties = {
        margin: '0 70px',
        marginBottom: '50px',
    };

    const paragraphStyle = {
        marginBottom: '50px',
    };

    const headingStyle = {
        marginBottom: '50px',
    };

    return (
        <div className='text-center'>
            <h1 className='bold-20 lg:bold-40' style={headingStyle}>Our Clients</h1>
            <p className='regular-16 mt-6 mb-6 text-gray-20' style={paragraphStyle}>
                We have been working with some Fortune 500+ clients
            </p>

            <ul style={iconListStyle as React.CSSProperties} >
                <li style={iconStyle}><img src="./Logo.svg" alt="Logo 1" /></li>
                <li style={iconStyle}><img src="./Logo (1).svg" alt="Logo 2" /></li>
                <li style={iconStyle}><img src="./Logo (2).svg" alt="Logo 3" /></li>
                <li style={iconStyle}><img src="./Logo (3).svg" alt="Logo 4" /></li>
                <li style={iconStyle}><img src="./Logo (4).svg" alt="Logo 5" /></li>
                <li style={iconStyle}><img src="./Logo (5).svg" alt="Logo 6" /></li>
                <li style={iconStyle}><img src="./Logo (2).svg" alt="Logo 7" /></li>
            </ul>

            <h1 className='bold-20 lg:bold-40 ' style={headingStyle}>
                Manage your entire community in a single system
            </h1>
            <ul style={cardContainerStyle as React.CSSProperties}>
                <li style={cardStyle}>
                    <img src="./Icon4.svg" alt="Logo 1" style={iconStyles} />
                    <h1>Membership Organisations</h1>
                    <p>Our membership management <br /> software provides full automation of<br />  membership renewals and payments</p>
                </li>

                <li style={cardStyle}>
                    <img src="./Icon (1).svg" alt="Logo 2" style={iconStyles} />
                    <h1>National Associations</h1>
                    <p>Our membership management<br />  software provides full automation of<br />  membership renewals and payments</p>
                </li>

                <li style={cardStyle}>
                    <img src="./Icon (2).svg" alt="Logo 3" style={iconStyles} />
                    <h1>Clubs And Groups</h1>
                    <p>Our membership management<br />  software provides full automation of<br />  membership renewals and payments</p>
                </li>

            </ul>
        </div>
    );
}

export default Icon;
