import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountTreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeFilled'

      short_name='AccountTree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-200v-40h-80q-33 0-56.5-23.5T440-320v-320h-80v40q0 33-23.5 56.5T280-520H160q-33 0-56.5-23.5T80-600v-160q0-33 23.5-56.5T160-840h120q33 0 56.5 23.5T360-760v40h240v-40q0-33 23.5-56.5T680-840h120q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H680q-33 0-56.5-23.5T600-600v-40h-80v320h80v-40q0-33 23.5-56.5T680-440h120q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H680q-33 0-56.5-23.5T600-200Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeFilled.displayName = 'OnesyIconMaterialAccountTreeFilled';

export default IconMaterialAccountTreeFilled;
