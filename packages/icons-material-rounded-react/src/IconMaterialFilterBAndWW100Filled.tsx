import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterBAndWW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWW100Filled'

      short_name='FilterBAndW'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-172H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17Zm-518-38q3 3 8.5 6.5T232-200h248v-320l270 310q3-3 6.5-8.5T760-232v-496q0-14-9-23t-23-9H480v240L210-210Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWW100Filled.displayName = 'OnesyIconMaterialFilterBAndWW100Filled';

export default IconMaterialFilterBAndWW100Filled;
