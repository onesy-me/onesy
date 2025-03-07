import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenW100'

      short_name='Token'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-110 146-295v-370l334-185 334 185v370L480-110ZM369-558q20-26 49-41t62-15q33 0 62 15t49 41l178-99-289-161-289 161 178 99Zm97 408v-195q-51-8-85.5-46T346-480q0-14 2.5-26.5T356-532L174-634v322l292 162Zm14-224q45 0 75.5-30.5T586-480q0-45-30.5-75.5T480-586q-45 0-75.5 30.5T374-480q0 45 30.5 75.5T480-374Zm14 224 292-162v-322L604-532q5 13 7.5 25.5T614-480q0 51-34.5 89T494-345v195Z"/>
    </Icon>
  );
});

IconMaterialTokenW100.displayName = 'OnesyIconMaterialTokenW100';

export default IconMaterialTokenW100;
