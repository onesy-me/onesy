import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeHealthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthFilled'

      short_name='HomeHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-380v40q0 25 17.5 42.5T480-280q25 0 42.5-17.5T540-340v-40h40q25 0 42.5-17.5T640-440q0-25-17.5-42.5T580-500h-40v-40q0-25-17.5-42.5T480-600q-25 0-42.5 17.5T420-540v40h-40q-25 0-42.5 17.5T320-440q0 25 17.5 42.5T380-380h40ZM240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthFilled.displayName = 'OnesyIconMaterialHomeHealthFilled';

export default IconMaterialHomeHealthFilled;
