import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100Filled'

      short_name='FilterAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M555-518 325-748h413L555-518Zm239 392L508-412v200h-56v-256L126-794l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100Filled.displayName = 'OnesyIconMaterialFilterAltOffW100Filled';

export default IconMaterialFilterAltOffW100Filled;
