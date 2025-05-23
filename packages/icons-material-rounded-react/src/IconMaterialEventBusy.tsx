import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventBusy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusy'

      short_name='EventBusy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-304-64 64q-11 11-28 11t-28-11q-11-11-11-28t11-28l64-64-64-64q-11-11-11-28t11-28q11-11 28-11t28 11l64 64 64-64q11-11 28-11t28 11q11 11 11 28t-11 28l-64 64 64 64q11 11 11 28t-11 28q-11 11-28 11t-28-11l-64-64ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventBusy.displayName = 'OnesyIconMaterialEventBusy';

export default IconMaterialEventBusy;
