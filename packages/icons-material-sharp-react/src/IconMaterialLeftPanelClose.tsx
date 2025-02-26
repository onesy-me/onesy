import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelClose'

      short_name='LeftPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-320v-320L500-480l160 160ZM200-200h120v-560H200v560Zm200 0h360v-560H400v560Zm-80 0H200h120Zm-200 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelClose.displayName = 'OnesyIconMaterialLeftPanelClose';

export default IconMaterialLeftPanelClose;
