import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnalytics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Analytics'

      short_name='Analytics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480q-17 0-28.5 11.5T280-440v120q0 17 11.5 28.5T320-280q17 0 28.5-11.5T360-320v-120q0-17-11.5-28.5T320-480Zm320-200q-17 0-28.5 11.5T600-640v320q0 17 11.5 28.5T640-280q17 0 28.5-11.5T680-320v-320q0-17-11.5-28.5T640-680ZM480-400q-17 0-28.5 11.5T440-360v40q0 17 11.5 28.5T480-280q17 0 28.5-11.5T520-320v-40q0-17-11.5-28.5T480-400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm280 280q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialAnalytics.displayName = 'OnesyIconMaterialAnalytics';

export default IconMaterialAnalytics;
