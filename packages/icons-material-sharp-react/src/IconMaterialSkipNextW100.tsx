import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextW100'

      short_name='SkipNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M648-312v-336h28v336h-28Zm-364 0v-336l252 168-252 168Zm28-168Zm0 116 174-116-174-116v232Z"/>
    </Icon>
  );
});

IconMaterialSkipNextW100.displayName = 'OnesyIconMaterialSkipNextW100';

export default IconMaterialSkipNextW100;
