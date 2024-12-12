import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadge'

      short_name='EMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320v-80H400v-80h200v-80H400v-80h240v-80H320v400ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadge.displayName = 'OnesyIconMaterialEMobiledataBadge';

export default IconMaterialEMobiledataBadge;
