import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAgenderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgenderFilled'

      short_name='Agender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-100 0-170-70t-70-170q0-90 57.5-156.5T440-597v-243h80v243q86 14 143 80.5T720-360q0 100-70 170t-170 70Zm0-80q56 0 98.5-34t56.5-86H325q14 52 56.5 86t98.5 34ZM325-400h310q-14-52-56.5-86T480-520q-56 0-98.5 34T325-400Z"/>
    </Icon>
  );
});

IconMaterialAgenderFilled.displayName = 'OnesyIconMaterialAgenderFilled';

export default IconMaterialAgenderFilled;
