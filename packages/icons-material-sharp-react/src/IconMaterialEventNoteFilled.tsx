import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteFilled'

      short_name='EventNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400v-80h400v80H280Zm0 160v-80h280v80H280ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialEventNoteFilled.displayName = 'OnesyIconMaterialEventNoteFilled';

export default IconMaterialEventNoteFilled;
