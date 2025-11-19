import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsSeatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSeatingFilled'

      short_name='SettingsSeating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q-17 0-28.5-11.5T320-280v-80h-6q-32 0-55-21t-25-52l-30-364q-2-17 10-30t29-13h55q45 0 78 28t41 72l23 140h160q66 0 113 47t47 113v40q0 17-11.5 28.5T720-360h-40v80q0 17-11.5 28.5T640-240q-17 0-28.5-11.5T600-280v-80H400v80q0 17-11.5 28.5T360-240ZM320-80q-17 0-28.5-11.5T280-120q0-17 11.5-28.5T320-160q17 0 28.5 11.5T360-120q0 17-11.5 28.5T320-80Zm160 0q-17 0-28.5-11.5T440-120q0-17 11.5-28.5T480-160q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80Zm160 0q-17 0-28.5-11.5T600-120q0-17 11.5-28.5T640-160q17 0 28.5 11.5T680-120q0 17-11.5 28.5T640-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsSeatingFilled.displayName = 'OnesyIconMaterialSettingsSeatingFilled';

export default IconMaterialSettingsSeatingFilled;
