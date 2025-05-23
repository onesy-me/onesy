import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpW100'

      short_name='Mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M284-556h72v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h72v166q0 6 4 10t10 4q6 0 10-4t4-10v-166q0-12-8-20t-20-8H284q-12 0-20 8t-8 20v166q0 6 4 10t10 4q6 0 10-4t4-10v-166Zm300 120h92q12 0 20-8t8-20v-92q0-12-8-20t-20-8h-92q-11 0-19.5 8.5T556-556v166q0 6 4 10t10 4q6 0 10-4t4-10v-46Zm0-28v-92h92v92h-92ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialMpW100.displayName = 'OnesyIconMaterialMpW100';

export default IconMaterialMpW100;
