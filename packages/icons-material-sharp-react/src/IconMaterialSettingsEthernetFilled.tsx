import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsEthernetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernetFilled'

      short_name='SettingsEthernet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-240-56-56 182-184-182-184 56-56 240 240-240 240Zm-400 0L40-480l240-240 56 56-182 184 182 184-56 56Zm40-200q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm160 0q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm160 0q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440Z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernetFilled.displayName = 'OnesyIconMaterialSettingsEthernetFilled';

export default IconMaterialSettingsEthernetFilled;
