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
      <path d="M372-349v-262q0-14 9-22t21-8q4 0 8 1t8 3l206 132q7 5 10.5 11t3.5 14q0 8-3.5 14T624-455L418-323q-4 2-8 3t-8 1q-12 0-21-8t-9-22Zm28-131Zm0 134 212-134-212-134v268Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100.displayName = 'OnesyIconMaterialPlayArrowW100';

export default IconMaterialPlayArrowW100;
