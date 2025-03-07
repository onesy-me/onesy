import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSolarPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerW100'

      short_name='SolarPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m143-134 59-295h555l59 295H143Zm13-666v-28h105v28H156Zm22 638h288v-104H199l-21 104Zm61-430-20-19 74-74 20 19-74 74Zm-34 298h261v-107H226l-21 107Zm275-385q-63 0-106.5-43.5T330-829h28q0 50.83 35.62 86.42Q429.24-707 480.12-707t86.38-35.58Q602-778.17 602-829h28q0 63-43.5 106.5T480-679Zm0-150Zm-14 319v-105h28v105h-28Zm28 348h287l-21-104H494v104Zm0-132h260l-21-107H494v107Zm229-297-75-75 19-19 76 74-20 20Zm-24-209v-28h105v28H699Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerW100.displayName = 'OnesyIconMaterialSolarPowerW100';

export default IconMaterialSolarPowerW100;
