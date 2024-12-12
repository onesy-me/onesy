import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCapslock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslock'

      short_name='KeyboardCapslock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-80h480v80H240Zm240-496 240 240-56 56-184-184-184 184-56-56 240-240Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslock.displayName = 'OnesyIconMaterialKeyboardCapslock';

export default IconMaterialKeyboardCapslock;
