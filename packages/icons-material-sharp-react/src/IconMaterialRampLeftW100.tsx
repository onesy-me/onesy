import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeftW100'

      short_name='RampLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-173v-560l-90 90-20-20 124-124 124 124-20 20-90-90v133q0 61 22.5 113.5T573-392q34 42 73 74.5t72 53.5l-20 20q-72-48-125-105t-79-118v294h-28Z"/>
    </Icon>
  );
});

IconMaterialRampLeftW100.displayName = 'OnesyIconMaterialRampLeftW100';

export default IconMaterialRampLeftW100;
