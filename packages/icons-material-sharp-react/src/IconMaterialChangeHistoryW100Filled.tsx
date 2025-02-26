import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChangeHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryW100Filled'

      short_name='ChangeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m174-212 306-490 306 490H174Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryW100Filled.displayName = 'OnesyIconMaterialChangeHistoryW100Filled';

export default IconMaterialChangeHistoryW100Filled;
