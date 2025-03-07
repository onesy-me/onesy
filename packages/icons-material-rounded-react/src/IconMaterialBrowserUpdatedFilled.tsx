import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowserUpdatedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedFilled'

      short_name='BrowserUpdated'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h280q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H160v440h640v-80q0-17 11.5-28.5T840-440q17 0 28.5 11.5T880-400v80q0 33-23.5 56.5T800-240H680l28 28q6 6 9 13.5t3 15.5v23q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-23q0-8 3-15.5t9-13.5l28-28H160Zm400-273v-287q0-17 11.5-28.5T600-840q17 0 28.5 11.5T640-800v287l76-75q11-11 27.5-11.5T772-588q11 11 11 28t-11 28L600-360 428-532q-11-11-11.5-27.5T428-588q11-11 28-11t28 11l76 75Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedFilled.displayName = 'OnesyIconMaterialBrowserUpdatedFilled';

export default IconMaterialBrowserUpdatedFilled;
