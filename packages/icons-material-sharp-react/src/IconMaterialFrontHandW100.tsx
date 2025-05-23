import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandW100'

      short_name='FrontHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M497-506v-336h28v336h-28Zm-143 0v-296h28v296h-28ZM500.2-92Q380-92 296-175.86 212-259.72 212-380v-368h28v368q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-166h-26q-27 0-46.5 19.5T668-480v104h-64q-45 0-75.5 30.5T498-270v14h-28v-14q0-56 39-95t95-39h36v-358h28v215q13-13 29.78-20 16.79-7 36.22-7h54v194q0 120.28-83.8 204.14Q620.4-92 500.2-92ZM514-347Z"/>
    </Icon>
  );
});

IconMaterialFrontHandW100.displayName = 'OnesyIconMaterialFrontHandW100';

export default IconMaterialFrontHandW100;
