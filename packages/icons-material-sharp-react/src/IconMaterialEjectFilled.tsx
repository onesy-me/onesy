import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectFilled'

      short_name='Eject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Z"/>
    </Icon>
  );
});

IconMaterialEjectFilled.displayName = 'OnesyIconMaterialEjectFilled';

export default IconMaterialEjectFilled;
