import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2'

      short_name='StickyNote2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h360v-200h200v-360H200v560Zm-80 80v-720h720v480L600-120H120Zm160-280v-80h200v80H280Zm0-160v-80h400v80H280Zm-80 360v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2.displayName = 'OnesyIconMaterialStickyNote2';

export default IconMaterialStickyNote2;
