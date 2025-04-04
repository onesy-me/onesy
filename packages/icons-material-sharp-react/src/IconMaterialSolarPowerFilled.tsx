import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSolarPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerFilled'

      short_name='SolarPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-800v-80h120v80H120ZM80-80h360v-160H112L80-80Zm165-507-57-56 85-85 57 56-85 85ZM128-320h312v-160H160l-32 160Zm352-360q-83 0-141.5-58.5T280-880h400q0 83-58.5 141.5T480-680Zm-40 160v-120h80v120h-80Zm80 440h360l-32-160H520v160Zm0-240h312l-32-160H520v160Zm195-267-84-85 56-56 85 84-57 57Zm5-213v-80h120v80H720Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerFilled.displayName = 'OnesyIconMaterialSolarPowerFilled';

export default IconMaterialSolarPowerFilled;
