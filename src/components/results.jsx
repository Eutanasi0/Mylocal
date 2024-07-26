import PropTypes from 'prop-types';
import './results.css'; 

const Results = ({ bands }) => {
  return (
    <div className="results">
      {bands.length > 0 ? (
        <div className="band-grid">
          {bands.map((band, index) => (
            <div key={index} className="band-card">
              <h2>{band.banda}</h2>
              <p>Género: {band.genero}</p>
              <p>Departamento: {band.departamento}</p>
              <img src={band.img} alt={band.banda} style={{ width: '100px' }} />
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

// Validación de PropTypes
Results.propTypes = {
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      banda: PropTypes.string.isRequired,
      genero: PropTypes.string.isRequired,
      departamento: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Results;
