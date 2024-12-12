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
      <path d="M840-120H120v-720h720v720ZM520-440v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z"/>
    </Icon>
  );
});

IconMaterialWindow.displayName = 'OnesyIconMaterialWindow';

export default IconMaterialWindow;
