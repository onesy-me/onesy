import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5gMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadge'

      short_name='5gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm640-320H640v80h40v80H560v-240h200v-80H480v400h280v-240ZM200-280h240v-240H280v-80h160v-80H200v240h160v80H200v80Zm-80 80v-560 560Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadge.displayName = 'OnesyIconMaterial5gMobiledataBadge';

export default IconMaterial5gMobiledataBadge;
