import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthAmericaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthAmericaW100'

      short_name='SouthAmerica'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28-28-28q-6-6-9-13t-3-15v-224q-33 0-56.5-23.5T360-520v-40L235-685q-35 42-55 94t-20 111q0 134 93 227t227 93Zm40-2q119-15 199.5-105T800-480q0-133-93.5-226.5T480-800q-44 0-84.5 11.5T320-757v77h142q18 0 34.5 8t27.5 22l56 70h60q17 0 28.5 11.5T680-540v42q0 9-2.5 17t-7.5 16L520-240v78Z"/>
    </Icon>
  );
});

IconMaterialSouthAmericaW100.displayName = 'OnesyIconMaterialSouthAmericaW100';

export default IconMaterialSouthAmericaW100;
