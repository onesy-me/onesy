import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosed'

      short_name='CurtainsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h120v-560H240v560Zm200 0h80v-560h-80v560Zm160 0h120v-560H600v560Zm-360 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosed.displayName = 'OnesyIconMaterialCurtainsClosed';

export default IconMaterialCurtainsClosed;
