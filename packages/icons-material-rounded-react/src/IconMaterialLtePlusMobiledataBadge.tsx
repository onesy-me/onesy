import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLtePlusMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataBadge'

      short_name='LtePlusMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560 560Zm0 80q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v80q0 17-11.5 28.5T880-640q-17 0-28.5-11.5T840-680v-80H120v560h720v-80q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280v80q0 33-23.5 56.5T840-120H120Zm160-200q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400h-40v-200q0-17-11.5-28.5T200-640q-17 0-28.5 11.5T160-600v240q0 17 11.5 28.5T200-320h80Zm100-240v200q0 17 11.5 28.5T420-320q17 0 28.5-11.5T460-360v-200h20q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640H360q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560h20Zm300 240q17 0 28.5-11.5T720-360q0-17-11.5-28.5T680-400h-40v-40h20q17 0 28.5-11.5T700-480q0-17-11.5-28.5T660-520h-20v-40h40q17 0 28.5-11.5T720-600q0-17-11.5-28.5T680-640h-80q-17 0-28.5 11.5T560-600v240q0 17 11.5 28.5T600-320h80Zm130-130v20q0 13 8.5 21.5T840-400q13 0 21.5-8.5T870-430v-20h20q13 0 21.5-8.5T920-480q0-13-8.5-21.5T890-510h-20v-20q0-13-8.5-21.5T840-560q-13 0-21.5 8.5T810-530v20h-20q-13 0-21.5 8.5T760-480q0 13 8.5 21.5T790-450h20Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataBadge.displayName = 'OnesyIconMaterialLtePlusMobiledataBadge';

export default IconMaterialLtePlusMobiledataBadge;
