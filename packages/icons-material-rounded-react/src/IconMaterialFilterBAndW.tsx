import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterBAndW = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndW'

      short_name='FilterBAndW'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120Zm-560-80h280v-320l280 320v-560H480v240L200-200Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndW.displayName = 'OnesyIconMaterialFilterBAndW';

export default IconMaterialFilterBAndW;
