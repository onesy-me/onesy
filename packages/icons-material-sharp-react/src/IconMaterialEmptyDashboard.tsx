import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmptyDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmptyDashboard'

      short_name='EmptyDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h220v-160H240v160Zm0-200h220v-280H240v280Zm260 200h220v-280H500v280Zm0-320h220v-160H500v160ZM120-120v-720h720v160h80v80h-80v80h80v80h-80v80h80v80h-80v160H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialEmptyDashboard.displayName = 'OnesyIconMaterialEmptyDashboard';

export default IconMaterialEmptyDashboard;
