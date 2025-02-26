import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplicitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitW100Filled'

      short_name='Explicit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M414-334v-132h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H414v-132h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H400q-5.95 0-9.98 4.03Q386-645.95 386-640v320q0 5.95 4.02 9.98Q394.05-306 400-306h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H414ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialExplicitW100Filled.displayName = 'OnesyIconMaterialExplicitW100Filled';

export default IconMaterialExplicitW100Filled;
