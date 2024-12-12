import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionTopRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightFilled'

      short_name='PositionTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-440h240q25 0 42.5-17.5T720-620q0-25-17.5-42.5T660-680H420q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightFilled.displayName = 'OnesyIconMaterialPositionTopRightFilled';

export default IconMaterialPositionTopRightFilled;
