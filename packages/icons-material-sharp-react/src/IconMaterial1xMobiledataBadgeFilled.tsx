import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeFilled'

      short_name='1xMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h80v-400H200v80h80v320Zm180 0h80l70-127 70 127h80L650-480l110-200h-80l-70 127-70-127h-80l110 200-110 200ZM40-120v-720h880v720H40Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeFilled.displayName = 'OnesyIconMaterial1xMobiledataBadgeFilled';

export default IconMaterial1xMobiledataBadgeFilled;
