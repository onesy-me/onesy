import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHvacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HvacW100Filled'

      short_name='Hvac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-287q81 0 137-56t56-137q0-81-56-137t-137-56q-81 0-137 56t-56 137q0 81 56 137t137 56Zm0-27q-35 0-65.5-14T359-366h242q-25 24-55.5 38T480-314Zm-142-80q-9.2-16.8-14.95-34.8-5.75-18-8.05-37.2h330q-2 19-8.11 37.07Q630.78-410.86 621-394H338Zm-23-100q2-19 8.11-37.07Q329.22-549.14 339-566h283q9.2 16.8 14.95 34.8 5.75 18 8.05 37.2H315Zm44-100q25-24 55.5-38t65.5-14q35 0 65.5 14t55.5 38H359ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Z"/>
    </Icon>
  );
});

IconMaterialHvacW100Filled.displayName = 'OnesyIconMaterialHvacW100Filled';

export default IconMaterialHvacW100Filled;
