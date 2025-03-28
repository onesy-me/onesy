import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkedCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraW100'

      short_name='LinkedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440Zm320-216q0-77-53.42-130.5T616-840v-28q88 0 150 61.83 62 61.84 62 150.17h-28Zm-106 0q0-32-22.91-55-22.92-23-55.09-23v-28q45 0 75.5 30.5T722-656h-28ZM132-172v-536h176l74-80h194v28H394l-74 80H160v480h640v-416h28v444H132Zm348-128q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraW100.displayName = 'OnesyIconMaterialLinkedCameraW100';

export default IconMaterialLinkedCameraW100;
