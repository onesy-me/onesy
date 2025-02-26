import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpen'

      short_name='LeftPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-640v320l160-160-160-160ZM200-200h120v-560H200v560Zm200 0h360v-560H400v560Zm-80 0H200h120Zm-200 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpen.displayName = 'OnesyIconMaterialLeftPanelOpen';

export default IconMaterialLeftPanelOpen;
