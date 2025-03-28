import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHvacW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HvacW100'

      short_name='Hvac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-287q81 0 137-56t56-137q0-81-56-137t-137-56q-81 0-137 56t-56 137q0 81 56 137t137 56Zm0-27q-35 0-65.5-14T359-366h242q-25 24-55.5 38T480-314Zm-142-80q-9-17-15-35t-8-37h330q-2 19-8 37t-16 35H338Zm-23-100q2-19 8-37t16-35h283q9 17 15 35t8 37H315Zm44-100q25-24 55.5-38t65.5-14q35 0 65.5 14t55.5 38H359ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm0-28h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialHvacW100.displayName = 'OnesyIconMaterialHvacW100';

export default IconMaterialHvacW100;
