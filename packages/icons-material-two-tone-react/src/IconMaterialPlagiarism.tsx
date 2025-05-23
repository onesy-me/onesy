import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlagiarism = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Plagiarism'

      short_name='Plagiarism'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13,4H6v16l12,0V9h-5V4z M13.97,11.03c1.12,1.12,1.31,2.8,0.59,4.13l1.88,1.88l-1.41,1.41l-1.88-1.88 c-1.33,0.71-3.01,0.53-4.13-0.59c-1.37-1.37-1.37-3.58,0-4.95C10.39,9.66,12.61,9.66,13.97,11.03z" opacity=".3"/><circle cx="11.5" cy="13.5" opacity=".3" r="1.5"/><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20L6,20V4h7v5h5V20z"/><path d="M9.03,11.03c-1.37,1.37-1.37,3.58,0,4.95c1.12,1.12,2.8,1.31,4.13,0.59l1.88,1.88l1.41-1.41l-1.88-1.88 c0.71-1.33,0.53-3.01-0.59-4.13C12.61,9.66,10.39,9.66,9.03,11.03z M12.56,14.56c-0.59,0.59-1.54,0.59-2.12,0 c-0.59-0.59-0.59-1.54,0-2.12c0.59-0.59,1.54-0.59,2.12,0C13.15,13.03,13.15,13.97,12.56,14.56z"/></g></g>
    </Icon>
  );
});

IconMaterialPlagiarism.displayName = 'OnesyIconMaterialPlagiarism';

export default IconMaterialPlagiarism;
