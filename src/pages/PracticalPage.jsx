import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import practicalsData from '../data/practicals';
import CodeBlock from '../components/CodeBlock';
import FileDownload from '../components/FileDownload';

function PracticalPage() {
  const { id } = useParams();
  const practical = practicalsData.find(p => p.id === parseInt(id));

  if (!practical) {
    return <Navigate to="/" />;
  }

  const getBadgeClass = (tech) => {
    const techName = tech.toLowerCase().replace(' ', '-');
    return `tech-badge badge-${techName}`;
  };

  return (
    <div className="practical-page">
      <div className="back-link-container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Practicals
        </Link>
      </div>

      <div className="practical-header">
        <div className="title-section">
          <h2>Practical {practical.id}</h2>
          <h1>{practical.title}</h1>
          <span className={getBadgeClass(practical.technology)}>
            {practical.technology}
          </span>
        </div>
      </div>

      <div className="practical-content">
        <div className="section">
          <h3>Aim / Description</h3>
          <p className="description-text">{practical.description}</p>
        </div>

        <div className="section">
          <h3>Topics / Tags</h3>
          <div className="tags-container">
            {practical.tags.map((tag, index) => (
              <span key={index} className="detail-tag">{tag}</span>
            ))}
          </div>
        </div>

        {practical.files && practical.files.length > 0 && (
          <div className="section">
            <h3>Downloadable Files</h3>
            <div className="files-grid">
              {practical.files.map((file, index) => (
                <FileDownload key={index} file={file} />
              ))}
            </div>
            {practical.technology === 'Tableau' && (
              <div className="app-info">
                <strong>Open Tableau:</strong> Download the .twb file and double-click to open it directly in Tableau Desktop.
              </div>
            )}
            {practical.technology === 'Power BI' && (
              <div className="app-info">
                <strong>Open Power BI:</strong> Download the .pbix file and double-click to open it in Power BI Desktop.
              </div>
            )}
          </div>
        )}

        {practical.code && practical.code.length > 0 && (
          <div className="section">
            <h3>Commands / Code</h3>
            <div className="code-grid">
              {practical.code.map((codeItem) => (
                <CodeBlock 
                  key={codeItem.id} 
                  title={codeItem.title} 
                  language={codeItem.language} 
                  code={codeItem.code} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PracticalPage;
