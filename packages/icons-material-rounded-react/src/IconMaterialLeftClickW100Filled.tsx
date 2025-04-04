import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftClickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftClickW100Filled'

      short_name='LeftClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M766-164 583-348l-18 55q-4 11-15 11t-14-11l-48-160q-2-8 4.5-14.5T507-472l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6ZM292-480q0-78 55-133t133-55q60 0 107.5 33t67.5 87q2 5-.5 11t-7.5 8q-5 2-10.5-1t-7.5-8q-17-45-57.5-73.5T480-640q-66 0-113 47t-47 113q0 51 29 92t74 58q5 2 7 7.5t0 10.5q-2 5-7.5 7t-10.5 0q-54-21-87-68t-33-107Z"/>
    </Icon>
  );
});

IconMaterialLeftClickW100Filled.displayName = 'OnesyIconMaterialLeftClickW100Filled';

export default IconMaterialLeftClickW100Filled;
