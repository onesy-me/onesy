import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftFilled'

      short_name='DockToLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h360v-560H200v560Zm-80 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftFilled.displayName = 'OnesyIconMaterialDockToLeftFilled';

export default IconMaterialDockToLeftFilled;
