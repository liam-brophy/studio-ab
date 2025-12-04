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
        <Link to={`/work/${slug}`} style={{ textDecoration: 'none', color: '#CC5500' }}>
          <h3 style={{ margin: 0, cursor: 'pointer', fontWeight: 100 }}>{title}</h3>
        </Link>
        {expanded ? (
          <FiMinus onClick={() => setExpanded(false)} style={{ cursor: 'pointer' }} />
        ) : (
          <FiPlus onClick={() => setExpanded(true)} style={{ cursor: 'pointer' }} />
        )}
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #CC5500', margin: '5px 0' }} />
      {expanded && (
        <div style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {previewImage && <img src={previewImage} alt={title} style={{ width: '150px', height: 'auto' }} />}
          <p style={{ textTransform: 'none', flex: 1 }}>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Project;