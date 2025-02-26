import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsMoreDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDown'

      short_name='ArrowsMoreDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-440h80v360h360v80H200Zm200-200v-440h80v360h360v80H400Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDown.displayName = 'OnesyIconMaterialArrowsMoreDown';

export default IconMaterialArrowsMoreDown;
