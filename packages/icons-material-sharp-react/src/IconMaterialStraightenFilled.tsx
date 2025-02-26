import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenFilled'

      short_name='Straighten'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h200v240h80v-240h80v240h80v-240h80v240h80v-240h200v480H80Z"/>
    </Icon>
  );
});

IconMaterialStraightenFilled.displayName = 'OnesyIconMaterialStraightenFilled';

export default IconMaterialStraightenFilled;
