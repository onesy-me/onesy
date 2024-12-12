import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreHorizFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizFilled'

      short_name='MoreHoriz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
    </Icon>
  );
});

IconMaterialMoreHorizFilled.displayName = 'OnesyIconMaterialMoreHorizFilled';

export default IconMaterialMoreHorizFilled;
