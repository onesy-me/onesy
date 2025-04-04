import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactsProductW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsProductW100Filled'

      short_name='ContactsProduct'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M244-160q-13.36 0-23.18-10.5T211-194v-84.12q0-72.1 44.8-127.38T371-476q-32.38 22.8-50.19 57.4Q303-384 303-345.09v150.88q0 8.74 3 17.47 3 8.74 8 16.74h-70Zm117.55 0q-13.58 0-23.56-10.12Q328-180.24 328-194v-151q0-57 39-96t96-39h151.78Q671-480 710-441t39 96v50q0 57-39 96t-96 39H361.55ZM480-548q-52.63 0-89.32-36.68Q354-621.37 354-674q0-52.63 36.68-89.32Q427.37-800 480-800q52.63 0 89.32 36.68Q606-726.63 606-674q0 52.63-36.68 89.32Q532.63-548 480-548Z"/>
    </Icon>
  );
});

IconMaterialContactsProductW100Filled.displayName = 'OnesyIconMaterialContactsProductW100Filled';

export default IconMaterialContactsProductW100Filled;
