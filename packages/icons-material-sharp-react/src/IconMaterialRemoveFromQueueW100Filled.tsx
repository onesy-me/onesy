import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFromQueueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueW100Filled'

      short_name='RemoveFromQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-506h268v-28H346v28Zm26 334v-80H132v-536h696v536H588v80H372Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueW100Filled.displayName = 'OnesyIconMaterialRemoveFromQueueW100Filled';

export default IconMaterialRemoveFromQueueW100Filled;
