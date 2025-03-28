import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbellFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellFilled'

      short_name='Doorbell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q17 0 28.5-11.5T520-300h-80q0 17 11.5 28.5T480-260Zm-140-60h280q8 0 14-6t6-14q0-8-6-14t-14-6h-20v-94q0-44-24-80t-66-46v-10q0-13-8.5-21.5T480-620q-13 0-21.5 8.5T450-590v10q-42 10-66 46t-24 80v94h-20q-8 0-14 6t-6 14q0 8 6 14t14 6ZM160-200v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200Z"/>
    </Icon>
  );
});

IconMaterialDoorbellFilled.displayName = 'OnesyIconMaterialDoorbellFilled';

export default IconMaterialDoorbellFilled;
