import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlightTextCursorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightTextCursorFilled'

      short_name='HighlightTextCursor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM360-280h240v-80h-80v-240h80v-80H360v80h80v240h-80v80Z"/>
    </Icon>
  );
});

IconMaterialHighlightTextCursorFilled.displayName = 'OnesyIconMaterialHighlightTextCursorFilled';

export default IconMaterialHighlightTextCursorFilled;
