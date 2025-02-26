import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientW100Filled'

      short_name='Gradient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm208-348v80h80v-80h-80Zm-160 0v80h80v-80h-80Zm80 80v80h80v-80h-80Zm160 0v80h80v-80h-80Zm-320 0v80h80v-80h-80Zm400-80v80h80v80h80v-80h-80v-80h-80ZM280-360v80h-80v48q0 13 9.5 22.5T232-200h48v-80h80v80h80v-80h80v80h80v-80h80v80h48q13 0 22.5-9.5T760-232v-48h-80v-80h-80v80h-80v-80h-80v80h-80v-80h-80Zm480-160v80-80Zm0 160v80-80Z"/>
    </Icon>
  );
});

IconMaterialGradientW100Filled.displayName = 'OnesyIconMaterialGradientW100Filled';

export default IconMaterialGradientW100Filled;
