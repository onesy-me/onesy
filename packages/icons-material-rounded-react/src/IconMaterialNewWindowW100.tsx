import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindowW100'

      short_name='NewWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h174q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-174q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v174q0 26-17 43t-43 17H232Zm408-468H534q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H668v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106Z"/>
    </Icon>
  );
});

IconMaterialNewWindowW100.displayName = 'OnesyIconMaterialNewWindowW100';

export default IconMaterialNewWindowW100;
