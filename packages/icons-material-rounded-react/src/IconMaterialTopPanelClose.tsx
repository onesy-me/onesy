import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelClose'

      short_name='TopPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m452-432-98 98q-10 10-5 22t19 12h224q14 0 19-12t-5-22l-98-98q-12-12-28-12t-28 12ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-520v-120H200v120h560Zm-560 80v360h560v-360H200Zm0-80v-120 120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelClose.displayName = 'OnesyIconMaterialTopPanelClose';

export default IconMaterialTopPanelClose;
