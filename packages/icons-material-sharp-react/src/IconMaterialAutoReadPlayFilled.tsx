import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayFilled'

      short_name='AutoReadPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-400 240-160-240-160v320ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayFilled.displayName = 'OnesyIconMaterialAutoReadPlayFilled';

export default IconMaterialAutoReadPlayFilled;
