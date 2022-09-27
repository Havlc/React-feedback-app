import PropTypes from 'prop-types';

function Header({text, backColor, fontColor}) {
    const headerStyle = {backgroundColor: backColor, color: fontColor};
    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'FeedbackUI',
    backColor: 'rgba(0,0,0,0.4)',
    fontColor: '#ff6a95'
}
//typy
Header.propTypes = {
    text: PropTypes.string,
    backColor: PropTypes.string,
    fontColor: PropTypes.string
}

export default Header
