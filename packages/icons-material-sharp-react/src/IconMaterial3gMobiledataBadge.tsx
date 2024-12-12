import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3gMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataBadge'

      short_name='3gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Zm360-80h280v-240H640v80h40v80H560v-240h200v-80H480v400Zm-280 0h240v-160l-40-40 40-40v-160H200v80h160v80H200v80h160v80H200v80Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataBadge.displayName = 'OnesyIconMaterial3gMobiledataBadge';

export default IconMaterial3gMobiledataBadge;
