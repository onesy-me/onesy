import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkedCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraW100Filled'

      short_name='LinkedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-656q0-77-53.42-130.5T616-840v-28q88 0 150 61.83 62 61.84 62 150.17h-28Zm-106 0q0-32-22.91-55-22.92-23-55.09-23v-28q45 0 75.5 30.5T722-656h-28ZM480-300q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM132-172v-536h176l74-80h194v94q32.17 0 55.09 22.91Q654-648.17 654-616h174v444H132Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraW100Filled.displayName = 'OnesyIconMaterialLinkedCameraW100Filled';

export default IconMaterialLinkedCameraW100Filled;
