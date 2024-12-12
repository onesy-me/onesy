import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMotionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionFilled'

      short_name='AutoAwesomeMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-480h480v480H400ZM240-240v-480h480v80H320v400h-80ZM80-400v-480h480v80H160v400H80Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionFilled.displayName = 'OnesyIconMaterialAutoAwesomeMotionFilled';

export default IconMaterialAutoAwesomeMotionFilled;
