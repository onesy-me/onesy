import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Window'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-320v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z"/>
    </Icon>
  );
});

IconMaterialWindow.displayName = 'OnesyIconMaterialWindow';

export default IconMaterialWindow;
