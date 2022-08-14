import PropTypes from 'prop-types'

const Header = ({ title }) => {
    const onClick = () => { 
        console.log("hi")
    } 

  return (
    <header>
    <h1>{title}</h1>
    </header>
  )
} 

Header.defaultProps = { 
    title: "RememberMe"
}


Header.propTypes = {
title: PropTypes.string
}

export default Header