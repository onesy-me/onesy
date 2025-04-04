import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltW100'

      short_name='TaskAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q60.33 0 114.17 19Q648-790 692-756l-20 21q-40-31-88.78-48-48.77-17-103.22-17-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-26-4-50.79T784-579l22-23q11 29 16.5 59.4 5.5 30.41 5.5 62.6 0 72.21-27.39 135.72-27.39 63.51-74.35 110.49-46.96 46.98-110.43 74.39Q552.35-132 480.17-132ZM422-332 288-466l20-20 114 114 386-386 20 20-406 406Z"/>
    </Icon>
  );
});

IconMaterialTaskAltW100.displayName = 'OnesyIconMaterialTaskAltW100';

export default IconMaterialTaskAltW100;
