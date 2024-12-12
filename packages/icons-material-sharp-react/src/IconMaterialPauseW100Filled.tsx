import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseW100Filled'

      short_name='Pause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-252v-456h134v456H560Zm-294 0v-456h134v456H266Z"/>
    </Icon>
  );
});

IconMaterialPauseW100Filled.displayName = 'OnesyIconMaterialPauseW100Filled';

export default IconMaterialPauseW100Filled;
