import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkspaces = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Workspaces'

      short_name='Workspaces'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="6" cy="17" opacity=".3" r="2"/><circle cx="12" cy="7" opacity=".3" r="2"/><circle cx="18" cy="17" opacity=".3" r="2"/><path d="M18,13c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S20.2,13,18,13z M18,19c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C20,18.1,19.1,19,18,19z"/><path d="M6,13c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S8.2,13,6,13z M6,19c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C8,18.1,7.1,19,6,19z"/><path d="M16,7c0-2.2-1.8-4-4-4S8,4.8,8,7s1.8,4,4,4S16,9.2,16,7z M12,9c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C14,8.1,13.1,9,12,9z"/></g></g>
    </Icon>
  );
});

IconMaterialWorkspaces.displayName = 'OnesyIconMaterialWorkspaces';

export default IconMaterialWorkspaces;
