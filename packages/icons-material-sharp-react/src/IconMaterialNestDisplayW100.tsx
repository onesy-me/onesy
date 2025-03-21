import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDisplayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayW100'

      short_name='NestDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-226q-97 0-155.5-11T266-266v-40h-93q-26 0-44-19.5T113-371l26-308q2-23 19.5-39t40.5-16h562q23 0 40.5 16t19.5 39l26 308q2 26-16 45.5T787-306h-93v40q0 18-58.5 29T480-226ZM174-334h612q14 0 24-10.5t8-24.5l-26-308q-1-13-10-21t-22-8H200q-13 0-22 8t-10 21l-26 308q-2 14 8 24.5t24 10.5Zm306-186Z"/>
    </Icon>
  );
});

IconMaterialNestDisplayW100.displayName = 'OnesyIconMaterialNestDisplayW100';

export default IconMaterialNestDisplayW100;
