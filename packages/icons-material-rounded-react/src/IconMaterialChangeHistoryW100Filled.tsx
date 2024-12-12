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
      <path d="M228-212q-18 0-26-15.5t1-30.5l252-403q9-14 25-14t25 14l252 403q9 15 1 30.5T732-212H228Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryW100Filled.displayName = 'OnesyIconMaterialChangeHistoryW100Filled';

export default IconMaterialChangeHistoryW100Filled;
