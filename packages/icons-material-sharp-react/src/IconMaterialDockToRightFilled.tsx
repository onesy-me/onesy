import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightFilled'

      short_name='DockToRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-200h360v-560H400v560Zm-280 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToRightFilled.displayName = 'OnesyIconMaterialDockToRightFilled';

export default IconMaterialDockToRightFilled;
