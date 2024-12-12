import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeft'

      short_name='DockToLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z"/>
    </Icon>
  );
});

IconMaterialDockToLeft.displayName = 'OnesyIconMaterialDockToLeft';

export default IconMaterialDockToLeft;
