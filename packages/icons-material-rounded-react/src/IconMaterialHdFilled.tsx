import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdFilled'

      short_name='Hd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-440h80v50q0 13 8.5 21.5T410-360q13 0 21.5-8.5T440-390v-180q0-13-8.5-21.5T410-600q-13 0-21.5 8.5T380-570v70h-80v-70q0-13-8.5-21.5T270-600q-13 0-21.5 8.5T240-570v180q0 13 8.5 21.5T270-360q13 0 21.5-8.5T300-390v-50Zm240 80h140q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600H540q-8 0-14 6t-6 14v200q0 8 6 14t14 6Zm40-60v-120h80v120h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialHdFilled.displayName = 'OnesyIconMaterialHdFilled';

export default IconMaterialHdFilled;
