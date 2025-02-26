import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpen'

      short_name='TopPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-328 98-98q10-10 5-22t-19-12H368q-14 0-19 12t5 22l98 98q12 12 28 12t28-12ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-520v-120H200v120h560Zm-560 80v360h560v-360H200Zm0-80v-120 120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpen.displayName = 'OnesyIconMaterialTopPanelOpen';

export default IconMaterialTopPanelOpen;
