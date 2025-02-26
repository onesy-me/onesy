import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDown'

      short_name='MoreDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-440h80v360h360v80H200Zm200-200v-440h80v360h360v80H400Z"/>
    </Icon>
  );
});

IconMaterialMoreDown.displayName = 'OnesyIconMaterialMoreDown';

export default IconMaterialMoreDown;
