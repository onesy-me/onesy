import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemove'

      short_name='PersonRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M10,16c2.69,0,5.77,1.28,6,2H4C4.2,17.29,7.3,16,10,16z" opacity=".3"/><circle cx="10" cy="8" opacity=".3" r="2"/><path d="M14,8c0-2.21-1.79-4-4-4C7.79,4,6,5.79,6,8c0,2.21,1.79,4,4,4C12.21,12,14,10.21,14,8z M12,8c0,1.1-0.9,2-2,2 c-1.1,0-2-0.9-2-2s0.9-2,2-2C11.1,6,12,6.9,12,8z"/><path d="M2,18v2h16v-2c0-2.66-5.33-4-8-4C7.33,14,2,15.34,2,18z M4,18c0.2-0.71,3.3-2,6-2c2.69,0,5.77,1.28,6,2H4z"/><rect height="2" width="6" x="17" y="10"/></g></g>
    </Icon>
  );
});

IconMaterialPersonRemove.displayName = 'OnesyIconMaterialPersonRemove';

export default IconMaterialPersonRemove;
