import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOff'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon enableBackground="new" opacity=".3" points="15.17,18 4,6.83 4,18"/><polygon enableBackground="new" opacity=".3" points="11.17,8 20,17.17 20,8"/><g><path d="M0.69,3.51l1.56,1.56C2.1,5.35,2.01,5.66,2.01,6L2,18c0,1.1,0.9,2,2,2h13.17l3.31,3.31l1.41-1.41L2.1,2.1L0.69,3.51z M15.17,18H4V6.83L15.17,18z"/><path d="M20,6h-8l-2-2H7.17l4,4H20v9.17l1.76,1.76C21.91,18.65,22,18.34,22,18V8C22,6.9,21.1,6,20,6z"/></g></g></g>
    </Icon>
  );
});

IconMaterialFolderOff.displayName = 'OnesyIconMaterialFolderOff';

export default IconMaterialFolderOff;
