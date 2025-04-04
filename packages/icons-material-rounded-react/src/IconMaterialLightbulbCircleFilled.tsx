import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbCircleFilled'

      short_name='LightbulbCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q25 0 42.5-17.5T540-260H420q0 25 17.5 42.5T480-200Zm-90-100h180q13 0 21.5-8.5T600-330q0-13-8.5-21.5T570-360H390q-13 0-21.5 8.5T360-330q0 13 8.5 21.5T390-300Zm-29-100h238q37-27 59-68.5t22-91.5q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560q0 50 22 91.5t59 68.5Zm22-60q-20-20-31.5-45.5T340-560q0-58 41-99t99-41q58 0 99 41t41 99q0 29-11.5 54.5T577-460H383Zm97 380q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialLightbulbCircleFilled.displayName = 'OnesyIconMaterialLightbulbCircleFilled';

export default IconMaterialLightbulbCircleFilled;
