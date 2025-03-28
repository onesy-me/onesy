import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCinematicBlur = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CinematicBlur'

      short_name='CinematicBlur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-840 65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840Zm0 240v400h640v-400H160Zm0 0v400-400Zm192 360h256q12 0 20.5-9t8.5-23q0-17-10.5-33T596-333q-22-14-51-20.5t-65-6.5q-36 0-65 6.5T364-333q-20 12-31 28t-11 33q0 14 9 23t21 9Zm128-160q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialCinematicBlur.displayName = 'OnesyIconMaterialCinematicBlur';

export default IconMaterialCinematicBlur;
