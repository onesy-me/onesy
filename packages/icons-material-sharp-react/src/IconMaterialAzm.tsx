import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAzm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Azm'

      short_name='Azm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-40v-360H40l400-400h360v360L400-40Zm240-353 80-80v-247H473l-80 80h247v247ZM480-233l80-80v-247H313l-80 80h247v247Z"/>
    </Icon>
  );
});

IconMaterialAzm.displayName = 'OnesyIconMaterialAzm';

export default IconMaterialAzm;
