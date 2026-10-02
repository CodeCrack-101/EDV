import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

function CodeBlock({ title, language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="code-card">
      <div className="code-header">
        <div className="code-info">
          <span className="code-title">{title}</span>
          <span className="code-language">{language}</span>
        </div>
        <button 
          className={`copy-btn ${copied ? 'copied' : ''}`} 
          onClick={handleCopy}
        >
          {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Code</>}
        </button>
      </div>
      <div className="code-content">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
