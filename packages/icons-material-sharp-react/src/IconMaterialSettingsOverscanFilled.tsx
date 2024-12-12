import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsOverscanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanFilled'

      short_name='SettingsOverscan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400v-160l-80 80 80 80Zm200 120 80-80H400l80 80Zm-80-320h160l-80-80-80 80Zm280 200 80-80-80-80v160ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanFilled.displayName = 'OnesyIconMaterialSettingsOverscanFilled';

export default IconMaterialSettingsOverscanFilled;
