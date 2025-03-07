import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDelete'

      short_name='FolderDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M14.5,11.5h2v4h-2V11.5z M20,8v10H4V6h5.17l2,2H20z M19,10h-2.5V9h-2v1H12v1.5h1v4c0,0.83,0.67,1.5,1.5,1.5 h2c0.83,0,1.5-0.67,1.5-1.5v-4h1V10z" opacity=".3"/><path d="M16.5,10V9h-2v1H12v1.5h1v4c0,0.83,0.67,1.5,1.5,1.5h2c0.83,0,1.5-0.67,1.5-1.5v-4h1V10H16.5z M16.5,15.5h-2v-4h2V15.5z M20,6h-8l-2-2H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V8C22,6.89,21.11,6,20,6z M20,18H4V6h5.17 l2,2H20V18z"/></g>
    </Icon>
  );
});

IconMaterialFolderDelete.displayName = 'OnesyIconMaterialFolderDelete';

export default IconMaterialFolderDelete;
