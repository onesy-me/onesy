import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareW100Filled'

      short_name='Share'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720.12-106q-39.12 0-66.62-27.42Q626-160.83 626-200q0-8.27 1.5-17.14Q629-226 632-234L314-422q-14 17-33 26.5t-41 9.5q-39.17 0-66.58-27.38Q146-440.76 146-479.88q0-39.12 27.42-66.62Q200.83-574 240-574q22 0 41 9.5t33 26.5l318-188q-3-8-4.5-16.86-1.5-8.87-1.5-17.14 0-39.17 27.38-66.58Q680.76-854 719.88-854q39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.42 66.62Q759.17-666 720-666q-22 0-41-9.5T646-702L328-514q3 8 4.5 16.79 1.5 8.8 1.5 17 0 8.21-1.5 17.21t-4.5 17l318 188q14-17 33-26.5t41-9.5q39.17 0 66.58 27.38Q814-239.24 814-200.12q0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialShareW100Filled.displayName = 'OnesyIconMaterialShareW100Filled';

export default IconMaterialShareW100Filled;
