import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function PracticalCard({ practical }) {
  const getBadgeClass = (tech) => {
    const techName = tech.toLowerCase().replace(' ', '-');
    return `tech-badge badge-${techName}`;
  };

  const resourceCount = practical.files.length + practical.code.length;

  return (
    <div className="practical-card">
      <div className="card-header">
        <span className="practical-number">Practical {practical.id}</span>
        <span className={getBadgeClass(practical.technology)}>
          {practical.technology}
        </span>
      </div>
      
      <h3 className="card-title">{practical.title}</h3>
      <p className="card-desc">{practical.description}</p>
      
      <div className="card-meta">
        <span className="resource-count">
          <strong>Resources:</strong> {resourceCount} {resourceCount === 1 ? 'item' : 'items'}
        </span>
      </div>
      
      <div className="card-tags">
        {practical.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="tag">#{tag}</span>
        ))}
      </div>
      
      <Link to={`/practical/${practical.id}`} className="view-btn">
        View Practical <FaArrowRight className="btn-icon" />
      </Link>
    </div>
  );
}

export default PracticalCard;
