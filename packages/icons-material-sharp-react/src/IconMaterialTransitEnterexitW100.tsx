import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitEnterexitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitW100'

      short_name='TransitEnterexit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-272v-336h56v240l308-308 40 40-308 308h240v56H278Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitW100.displayName = 'OnesyIconMaterialTransitEnterexitW100';

export default IconMaterialTransitEnterexitW100;
