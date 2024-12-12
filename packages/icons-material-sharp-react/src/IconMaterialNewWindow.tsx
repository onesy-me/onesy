import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindow'

      short_name='NewWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h320v80H200v560h560v-240h80v320H120Zm520-400v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z"/>
    </Icon>
  );
});

IconMaterialNewWindow.displayName = 'OnesyIconMaterialNewWindow';

export default IconMaterialNewWindow;
