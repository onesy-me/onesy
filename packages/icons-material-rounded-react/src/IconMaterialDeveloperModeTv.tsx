import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperModeTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeTv'

      short_name='DeveloperModeTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-520 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11L108-548q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76Zm576 0-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L748-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76ZM80-720v-40q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v40q0 17-11.5 28.5T840-680q-17 0-28.5-11.5T800-720v-40H160v40q0 17-11.5 28.5T120-680q-17 0-28.5-11.5T80-720Zm280 600q-17 0-28.5-11.5T320-160v-40H160q-33 0-56.5-23.5T80-280v-39q0-17 11.5-28t28.5-11q17 0 28.5 11.5T160-318v38h640v-39q0-17 11.5-28t28.5-11q17 0 28.5 11.5T880-318v38q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360Zm120-400Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeTv.displayName = 'OnesyIconMaterialDeveloperModeTv';

export default IconMaterialDeveloperModeTv;
