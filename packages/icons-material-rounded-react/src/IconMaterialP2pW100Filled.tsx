import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialP2pW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='P2pW100Filled'

      short_name='P2p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-496q0-24.75 17.63-42.38Q167.25-828 192-828h178q24.75 0 42.38 17.62Q430-792.75 430-768v160h-28v-81H160v338h270v79q0 24.75-17.62 42.37Q394.75-212 370-212H192Zm389 80q-21.04 0-36.02-14.98Q530-161.96 530-183v-168h28v80h242v-337H530v-80q0-24.75 17.63-42.38Q565.25-748 590-748h178q24.75 0 42.38 17.62Q828-712.75 828-688v496q0 24.75-17.62 42.37Q792.75-132 768-132H581ZM328.04-454q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Zm152 0q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Zm151 0q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialP2pW100Filled.displayName = 'OnesyIconMaterialP2pW100Filled';

export default IconMaterialP2pW100Filled;
