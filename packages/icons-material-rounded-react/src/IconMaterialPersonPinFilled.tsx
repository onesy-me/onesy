import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinFilled'

      short_name='PersonPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600l-92 92q-6 6-13 8.5T480-57q-8 0-15-2.5T452-68l-92-92Zm120-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-240h560v-46q-54-53-125.5-83.5T480-400q-83 0-154.5 30.5T200-286v46Z"/>
    </Icon>
  );
});

IconMaterialPersonPinFilled.displayName = 'OnesyIconMaterialPersonPinFilled';

export default IconMaterialPersonPinFilled;
