import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearch'

      short_name='PersonSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M4,18c0.22-0.72,3.31-2,6-2c0-0.7,0.13-1.37,0.35-1.99C7.62,13.91,2,15.27,2,18v2h9.54c-0.52-0.58-0.93-1.25-1.19-2H4z"/><path d="M10,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4C7.79,5,6,6.79,6,9C6,11.21,7.79,13,10,13z M10,7c1.1,0,2,0.89,2,2 c0,1.1-0.9,2-2,2s-2-0.9-2-2C8,7.89,8.9,7,10,7z"/><g opacity=".3"><path d="M10.35,18c0,0-0.35-0.79-0.35-2c-2.69,0-5.77,1.28-6,2H10.35z"/></g><path d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 c0.93,0.93,1.62,1.62,2.57,2.57L22,20.59C20.5,19.09,21.21,19.79,19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2 s2,0.9,2,2C18,17.1,17.1,18,16,18z"/></g><g opacity=".3"><circle cx="10" cy="9" r="2"/></g></g></g>
    </Icon>
  );
});

IconMaterialPersonSearch.displayName = 'OnesyIconMaterialPersonSearch';

export default IconMaterialPersonSearch;
