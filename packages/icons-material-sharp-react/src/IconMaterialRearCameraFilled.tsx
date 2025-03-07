import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRearCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraFilled'

      short_name='RearCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-640q17 0 28.5-11.5T700-680q0-17-11.5-28.5T660-720q-17 0-28.5 11.5T620-680q0 17 11.5 28.5T660-640ZM520-200h280v-560H520v560ZM80-120v-320h168l-64 64 56 56 160-160-160-160-56 56 64 64H80v-320h800v720H80Z"/>
    </Icon>
  );
});

IconMaterialRearCameraFilled.displayName = 'OnesyIconMaterialRearCameraFilled';

export default IconMaterialRearCameraFilled;
