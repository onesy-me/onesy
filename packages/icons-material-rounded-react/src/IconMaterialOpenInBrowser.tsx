import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInBrowser = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowser'

      short_name='OpenInBrowser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h120v-480H200v480h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm240-40v-206l-35 35q-12 12-28.5 11.5T348-332q-11-12-11.5-28t11.5-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q12 12 11.5 28T612-332q-12 12-28.5 12.5T555-331l-35-35v206q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowser.displayName = 'OnesyIconMaterialOpenInBrowser';

export default IconMaterialOpenInBrowser;
