import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhatshotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotFilled'

      short_name='Whatshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-100 0-183.5-44T158-242l164-164 120 100 198-198v104h80v-240H480v80h104L438-414 318-514 116-312q-17-38-26.5-80.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialWhatshotFilled.displayName = 'OnesyIconMaterialWhatshotFilled';

export default IconMaterialWhatshotFilled;
