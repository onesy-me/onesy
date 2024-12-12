import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipPreviousW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousW100Filled'

      short_name='SkipPrevious'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M284-312v-336h28v336h-28Zm392 0L424-480l252-168v336Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousW100Filled.displayName = 'OnesyIconMaterialSkipPreviousW100Filled';

export default IconMaterialSkipPreviousW100Filled;
