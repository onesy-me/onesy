import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputAntennaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntennaW100'

      short_name='SettingsInputAntenna'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-480q0-80 30.5-151t83-123.5q52.5-52.5 123-83T480-868q81 0 152 30t123.5 82.5Q808-703 838-632t30 152h-28q0-75-28.5-140.5T734-735q-49-49-114.5-77T480-840q-74 0-139.5 28T226-735q-49 49-77.5 114.5T120-480H92Zm160 0q0-97 66.5-162.5T480-708q95 0 161.5 65.5T708-480h-28q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480h-28Zm108 380-20-20 126-126v-159q-27-7-44-27t-17-47q0-32 21.5-53.5T480-554q32 0 53.5 21.5T555-479q0 27-17 47t-44 27v159l126 126-20 20-120-120-120 120Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntennaW100.displayName = 'OnesyIconMaterialSettingsInputAntennaW100';

export default IconMaterialSettingsInputAntennaW100;
