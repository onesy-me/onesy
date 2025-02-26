import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownW100Filled'

      short_name='ThumbDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-372v-112l128-304h438v416L416-134l-23-23 43-215H92Zm594 0v-416h142v416H686Z"/>
    </Icon>
  );
});

IconMaterialThumbDownW100Filled.displayName = 'OnesyIconMaterialThumbDownW100Filled';

export default IconMaterialThumbDownW100Filled;
