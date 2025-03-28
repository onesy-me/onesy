import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenSearchDesktopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopFilled'

      short_name='ScreenSearchDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-420q21 0 39.5-5.5T536-442l61 63q8 9 20.5 8.5T639-379q9-9 9.5-21.5T640-422l-62-62q11-17 16.5-36t5.5-40q0-59-41.5-99.5T460-700q-57 0-98.5 40.5T320-560q0 59 41.5 99.5T460-420Zm0-60q-33 0-56.5-23.5T380-560q0-33 23.5-56.5T460-640q32 0 56 23.5t24 56.5q0 33-23.5 56.5T460-480ZM80-120q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h800q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H80Zm80-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopFilled.displayName = 'OnesyIconMaterialScreenSearchDesktopFilled';

export default IconMaterialScreenSearchDesktopFilled;
