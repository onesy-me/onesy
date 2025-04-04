import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelCloseFilled'

      short_name='LeftPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-368v-224q0-14-12-19t-22 5l-98 98q-12 12-12 28t12 28l98 98q10 10 22 5t12-19ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80h360v-560H400v560Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseFilled.displayName = 'OnesyIconMaterialLeftPanelCloseFilled';

export default IconMaterialLeftPanelCloseFilled;
