import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepPublic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublic'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M365-580Zm-45 260H160q-17 0-28.5-11.5T120-360v-23q0-8 3-15.5t9-13.5l68-68v-280q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h180q17 0 28.5 11.5T420-800q0 17-11.5 28.5T380-760H280v281q0 16-6 30.5T257-423l-23 23h286q17 0 28.5 11.5T560-360q0 17-11.5 28.5T520-320H400v223q0 8-3 15.5T388-68l-14 14q-6 6-14 6t-14-6l-14-14q-6-6-9-13.5T320-97v-223Zm320-320q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q22 0 42-8t37-22q9-8 8-19t-11-16q-18-8-37-11.5t-39-3.5q-20 0-39 3.5T564-585q-10 5-10.5 15.5T561-551q17 15 37 23t42 8Zm0 80q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Z"/>
    </Icon>
  );
});

IconMaterialKeepPublic.displayName = 'OnesyIconMaterialKeepPublic';

export default IconMaterialKeepPublic;
