import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMotion = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotion'

      short_name='AutoAwesomeMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-480h480v480H400Zm80-80h320v-320H480v320Zm-240-80v-480h480v80H320v400h-80ZM80-400v-480h480v80H160v400H80Zm400 240v-320 320Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotion.displayName = 'OnesyIconMaterialAutoAwesomeMotion';

export default IconMaterialAutoAwesomeMotion;
