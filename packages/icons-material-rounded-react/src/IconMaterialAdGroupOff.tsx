import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdGroupOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOff'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-800v515q0 17-11.5 28.5T840-245q-17 0-28.5-11.5T800-285v-435H386q-16 0-30.5-6T330-743l-85-85q8-24 28.5-38t46.5-14h480q33 0 56.5 23.5T880-800ZM320-240q-33 0-56.5-23.5T240-320v-288L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240H320Zm0-80h208L320-528v208ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm265-343Zm135-114Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOff.displayName = 'OnesyIconMaterialAdGroupOff';

export default IconMaterialAdGroupOff;
