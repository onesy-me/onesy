import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsRemote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemote'

      short_name='SettingsRemote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 21h4V11h-4v10zm2-9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" opacity=".3"/><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-1 12h-4V11h4v10z"/><circle cx="12" cy="13" r="1"/><path d="M7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"/>
    </Icon>
  );
});

IconMaterialSettingsRemote.displayName = 'OnesyIconMaterialSettingsRemote';

export default IconMaterialSettingsRemote;
