import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryFilled'

      short_name='WorkHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m786-146 28-28-74-74v-112h-40v128l86 86ZM400-720h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM80-120v-600h240v-160h320v160h240v251q-35-25-76-38t-84-13q-116 0-198 82t-82 198q0 31 6.5 61.5T467-120H80Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryFilled.displayName = 'OnesyIconMaterialWorkHistoryFilled';

export default IconMaterialWorkHistoryFilled;
