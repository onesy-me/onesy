import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseW100Filled'

      short_name='PlayPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-362v-236l169 118-169 118Zm320 16v-268h28v268h-28Zm160 0v-268h28v268h-28Z"/>
    </Icon>
  );
});

IconMaterialPlayPauseW100Filled.displayName = 'OnesyIconMaterialPlayPauseW100Filled';

export default IconMaterialPlayPauseW100Filled;
