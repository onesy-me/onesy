import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClarify = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Clarify'

      short_name='Clarify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h280v-80H240v80Zm400 0h80v-400h-80v400ZM240-440h280v-80H240v80Zm0-160h280v-80H240v80ZM80-120v-720h800v720H80Zm80-80h640v-560H160v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialClarify.displayName = 'OnesyIconMaterialClarify';

export default IconMaterialClarify;
