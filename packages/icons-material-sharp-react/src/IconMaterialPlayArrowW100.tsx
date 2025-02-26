import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowW100'

      short_name='PlayArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-294v-372l292 186-292 186Zm28-186Zm0 134 212-134-212-134v268Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100.displayName = 'OnesyIconMaterialPlayArrowW100';

export default IconMaterialPlayArrowW100;
