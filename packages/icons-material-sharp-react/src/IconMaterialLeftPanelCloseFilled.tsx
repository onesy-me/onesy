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
      <path d="M660-320v-320L500-480l160 160ZM400-200h360v-560H400v560Zm-280 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseFilled.displayName = 'OnesyIconMaterialLeftPanelCloseFilled';

export default IconMaterialLeftPanelCloseFilled;
