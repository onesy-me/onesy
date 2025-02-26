import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitEnterexitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitW100Filled'

      short_name='TransitEnterexit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-272v-336h56v240l308-308 40 40-308 308h240v56H278Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitW100Filled.displayName = 'OnesyIconMaterialTransitEnterexitW100Filled';

export default IconMaterialTransitEnterexitW100Filled;
