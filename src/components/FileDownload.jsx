import { FaDownload, FaFileAlt } from 'react-icons/fa';

function FileDownload({ file }) {
  return (
    <div className="file-card">
      <div className="file-info">
        <FaFileAlt className="file-icon" />
        <div className="file-details">
          <span className="file-name">{file.name}</span>
          <span className="file-type">{file.type}</span>
        </div>
      </div>
      <a 
        href={file.path} 
        download={file.name} 
        className="download-btn"
      >
        <FaDownload /> Download
      </a>
    </div>
  );
}

export default FileDownload;
