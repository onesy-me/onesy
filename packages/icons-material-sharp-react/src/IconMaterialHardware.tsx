import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardware = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hardware'

      short_name='Hardware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-640H160q0-83 58.5-141.5T360-840h240v120l120-120h80v320h-80L600-640v520H360v-520Zm80 440h80v-240h-80v240Zm0-320h80v-240H360q-26 0-49 10.5T271-720h169v200Zm40 40Z"/>
    </Icon>
  );
});

IconMaterialHardware.displayName = 'OnesyIconMaterialHardware';

export default IconMaterialHardware;
