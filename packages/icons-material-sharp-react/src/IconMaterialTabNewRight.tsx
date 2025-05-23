import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabNewRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRight'

      short_name='TabNewRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-560 560Zm-80 80v-720h720v414q-19-7-39-10.5t-41-3.5v-320H200v560h320q0 21 3.5 41t10.5 39H120Zm640 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40ZM440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRight.displayName = 'OnesyIconMaterialTabNewRight';

export default IconMaterialTabNewRight;
