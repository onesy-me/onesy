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
      <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40Zm80 0h120v-560H240v560Zm200 0h80v-560h-80v560Zm160 0h120v-560H600v560Zm-360 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosed.displayName = 'OnesyIconMaterialCurtainsClosed';

export default IconMaterialCurtainsClosed;
