import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventUpcoming = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcoming'

      short_name='EventUpcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80v-80h160v-400H200v160h-80v-400h120v-80h80v80h320v-80h80v80h120v720H600ZM320 0l-56-56 103-104H40v-80h327L264-344l56-56 200 200L320 0ZM200-640h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventUpcoming.displayName = 'OnesyIconMaterialEventUpcoming';

export default IconMaterialEventUpcoming;
