import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupFilled'

      short_name='LightGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-80h320v80H120Zm560-40q-33 0-56.5-23.5T600-200H440v-40q0-90 57-156t143-80v-404h80v404q87 14 143.5 80T920-240v40H760q0 33-23 56.5T680-120Zm-440-80v-320H29l96-360h311l96 360H320v320h-80Z"/>
    </Icon>
  );
});

IconMaterialLightGroupFilled.displayName = 'OnesyIconMaterialLightGroupFilled';

export default IconMaterialLightGroupFilled;
