import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPlay'

      short_name='MotionPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m431-341 184-122q9-6 9-17t-9-17L431-619q-10-7-20.5-1.5T400-603v246q0 12 10.5 17.5T431-341Zm49 261q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-32 5-64t15-63q5-16 20.5-21.5T150-626q15 8 21.5 23.5T173-570q-6 22-9.5 44.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-24 0-47.5 3.5T386-786q-17 5-32-1t-22-21q-7-15-.5-30.5T354-859q30-11 62-16t64-5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM220-680q-25 0-42.5-17.5T160-740q0-25 17.5-42.5T220-800q25 0 42.5 17.5T280-740q0 25-17.5 42.5T220-680Zm260 200Z"/>
    </Icon>
  );
});

IconMaterialMotionPlay.displayName = 'OnesyIconMaterialMotionPlay';

export default IconMaterialMotionPlay;
