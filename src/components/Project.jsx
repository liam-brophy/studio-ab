import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';

function Project({ title, description, images }) {
  const [expanded, setExpanded] = useState(false);

  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const previewImage = images[0];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to={`/work/${slug}`} style={{ textDecoration: 'none', color: 'black' }}>
          <h3 style={{ margin: 0, cursor: 'pointer' }}>{title}</h3>
        </Link>
        {expanded ? (
          <FiMinus onClick={() => setExpanded(false)} style={{ cursor: 'pointer' }} />
        ) : (
          <FiPlus onClick={() => setExpanded(true)} style={{ cursor: 'pointer' }} />
        )}
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid black', margin: '5px 0' }} />
      {expanded && (
        <div style={{ padding: '10px' }}>
          <p>{description}</p>
          {previewImage && <img src={previewImage} alt={title} />}
        </div>
      )}
    </div>
  );
}

export default Project;