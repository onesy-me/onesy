import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionPhotosPaused = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosPaused'

      short_name='MotionPhotosPaused'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360q17 0 28.5-11.5T440-400v-160q0-17-11.5-28.5T400-600q-17 0-28.5 11.5T360-560v160q0 17 11.5 28.5T400-360Zm160 0q17 0 28.5-11.5T600-400v-160q0-17-11.5-28.5T560-600q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-32 5-64t15-63q5-16 20.5-21.5T150-626q15 8 21.5 23.5T173-570q-6 22-9.5 44.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-24 0-47.5 3.5T386-786q-17 5-32-1t-22-21q-7-15-.5-30.5T354-859q30-11 62-16t64-5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM220-680q-25 0-42.5-17.5T160-740q0-25 17.5-42.5T220-800q25 0 42.5 17.5T280-740q0 25-17.5 42.5T220-680Zm260 200Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosPaused.displayName = 'OnesyIconMaterialMotionPhotosPaused';

export default IconMaterialMotionPhotosPaused;
