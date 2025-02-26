import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckbookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckbookW100Filled'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-456h696v135h-28L641-414H266v28h347L479-252H132Zm134-294h188v-28H266v28Zm270 370v-20l238-238 20 20-238 238h-20Zm280-262-20-20 29.89-29.85q4.15-4.15 9.13-4.15t8.98 4l2 2q4 4.12 4 9.06t-4.15 9.09L816-438Z"/>
    </Icon>
  );
});

IconMaterialCheckbookW100Filled.displayName = 'OnesyIconMaterialCheckbookW100Filled';

export default IconMaterialCheckbookW100Filled;
