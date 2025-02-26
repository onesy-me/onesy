import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipNextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextW100Filled'

      short_name='SkipNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M648-312v-336h28v336h-28Zm-364 0v-336l252 168-252 168Z"/>
    </Icon>
  );
});

IconMaterialSkipNextW100Filled.displayName = 'OnesyIconMaterialSkipNextW100Filled';

export default IconMaterialSkipNextW100Filled;
