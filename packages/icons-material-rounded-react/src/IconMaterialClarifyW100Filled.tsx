import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClarifyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyW100Filled'

      short_name='Clarify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-306h200q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm399.96-348q-5.96 0-9.96 4.03-4 4.02-4 9.97v320q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-320q0-5.95-4.04-9.97-4.03-4.03-10-4.03ZM280-466h200q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-160h200q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-88 454q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialClarifyW100Filled.displayName = 'OnesyIconMaterialClarifyW100Filled';

export default IconMaterialClarifyW100Filled;
