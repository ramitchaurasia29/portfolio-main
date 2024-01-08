
import PropTypes from "prop-types";


const Heading=(props)=> {
  return (
    <>
    <div className="text-white  font-bold text-6xl text-center mb-16 underline">
      <h1>
        
        {props.firstWord}
        <span>{props.secondWord}</span>
      </h1>
    </div>
    </>
  )
}

Heading.propTypes = {
    firstWord: PropTypes.string.isRequired,
    secondWord: PropTypes.string.isRequired,
  };

export default Heading