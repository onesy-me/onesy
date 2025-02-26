import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxFilled'

      short_name='AccountBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-46q-54-53-125.5-83.5T480-360q-83 0-154.5 30.5T200-246v46Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxFilled.displayName = 'OnesyIconMaterialAccountBoxFilled';

export default IconMaterialAccountBoxFilled;
