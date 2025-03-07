import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClarifyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyW100'

      short_name='Clarify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-306h200q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm400-348q-6 0-10 4t-4 10v320q0 6 4 10t10 4q6 0 10-4t4-10v-320q0-6-4-10t-10-4ZM280-466h200q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-160h200q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-88 454q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-496q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialClarifyW100.displayName = 'OnesyIconMaterialClarifyW100';

export default IconMaterialClarifyW100;
