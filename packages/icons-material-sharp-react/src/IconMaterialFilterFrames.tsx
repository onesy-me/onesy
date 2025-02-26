import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFrames = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFrames'

      short_name='FilterFrames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-720h240l160-160 160 160h240v720H80Zm80-80h640v-560H160v560Zm80-80v-400h480v400H240Zm80-80h320v-240H320v240Zm160-120Z"/>
    </Icon>
  );
});

IconMaterialFilterFrames.displayName = 'OnesyIconMaterialFilterFrames';

export default IconMaterialFilterFrames;
