import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFilled'

      short_name='Remove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/>
    </Icon>
  );
});

IconMaterialRemoveFilled.displayName = 'OnesyIconMaterialRemoveFilled';

export default IconMaterialRemoveFilled;
