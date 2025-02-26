import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualizerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerW100'

      short_name='Equalizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-206h108v206H212Zm214 0v-536h108v536H426Zm214 0v-346h108v346H640Z"/>
    </Icon>
  );
});

IconMaterialEqualizerW100.displayName = 'OnesyIconMaterialEqualizerW100';

export default IconMaterialEqualizerW100;
