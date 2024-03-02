import { useEffect } from 'react';

function DocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'behina-bahramsari-brainflix';
    };
  }, [title]);
}

export default DocumentTitle;