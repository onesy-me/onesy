import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOff'

      short_name='PowerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-120q-17 0-28.5-11.5T380-160v-80L263-357q-11-11-17-25.5t-6-30.5v-187q0-24 11-45t32-32l77 77h-40v186l140 140v74h40v-74l37-37L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L594-254l-14 14v80q0 17-11.5 28.5T540-120H420Zm266-268-46-46v-166H474L320-754v-46q0-17 11.5-28.5T360-840q17 0 28.5 11.5T400-800v120h160v-120q0-17 11.5-28.5T600-840q17 0 28.5 11.5T640-800v160l-40-40h40q33 0 56.5 23.5T720-600v145q0 16-6 30.5T697-399l-11 11ZM558-516Zm-130 97Z"/>
    </Icon>
  );
});

IconMaterialPowerOff.displayName = 'OnesyIconMaterialPowerOff';

export default IconMaterialPowerOff;
