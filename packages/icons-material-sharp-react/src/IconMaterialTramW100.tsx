import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTramW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramW100'

      short_name='Tram'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-280v-360q0-66 71-86t181-22l30-60H284v-28h392v28H526l-30 60q110 2 181 22t71 86v360q0 45-31.5 76.5T640-172l60 60v20h-20l-80-80H360l-80 80h-20v-20l60-60q-45 0-76.5-31.5T212-280Zm428-120H240h480-80ZM480-260q17 0 28.5-11.5T520-300q0-17-11.5-28.5T480-340q-17 0-28.5 11.5T440-300q0 17 11.5 28.5T480-260Zm0-392h240-480 240ZM240-428h480v-196H240v196Zm80 228h320q33 0 56.5-23.5T720-280v-120H240v120q0 33 23.5 56.5T320-200Zm160-520q-121 0-176 16.5T240-652h480q-9-35-64-51.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialTramW100.displayName = 'OnesyIconMaterialTramW100';

export default IconMaterialTramW100;
