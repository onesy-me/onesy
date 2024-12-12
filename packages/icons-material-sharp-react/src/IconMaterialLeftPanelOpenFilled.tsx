import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenFilled'

      short_name='LeftPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-640v320l160-160-160-160ZM400-200h360v-560H400v560Zm-280 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenFilled.displayName = 'OnesyIconMaterialLeftPanelOpenFilled';

export default IconMaterialLeftPanelOpenFilled;
