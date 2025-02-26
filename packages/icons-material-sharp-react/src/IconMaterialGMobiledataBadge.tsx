import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadge'

      short_name='GMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320v-240H480v80h80v80H400v-240h240v-80H320v400ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadge.displayName = 'OnesyIconMaterialGMobiledataBadge';

export default IconMaterialGMobiledataBadge;
