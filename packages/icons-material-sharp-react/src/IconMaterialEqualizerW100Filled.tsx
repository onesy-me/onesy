import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualizerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerW100Filled'

      short_name='Equalizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-206h108v206H212Zm214 0v-536h108v536H426Zm214 0v-346h108v346H640Z"/>
    </Icon>
  );
});

IconMaterialEqualizerW100Filled.displayName = 'OnesyIconMaterialEqualizerW100Filled';

export default IconMaterialEqualizerW100Filled;
