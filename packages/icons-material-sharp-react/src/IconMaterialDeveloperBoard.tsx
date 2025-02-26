import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoard'

      short_name='DeveloperBoard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h720v160h80v80h-80v80h80v80h-80v80h80v80h-80v160H80Zm80-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240Zm-320 80v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoard.displayName = 'OnesyIconMaterialDeveloperBoard';

export default IconMaterialDeveloperBoard;
