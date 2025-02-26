import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPagesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesW100'

      short_name='Pages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm280 357 63 39q8 5 16.5-1t6.5-16l-17-72 56-48q8-7 4.5-16T596-527l-73-7-29-67q-4-9-14-9t-14 9l-29 67-73 7q-10 1-13.5 10t4.5 16l56 48-17 72q-2 10 6.5 16t16.5 1l63-39Z"/>
    </Icon>
  );
});

IconMaterialPagesW100.displayName = 'OnesyIconMaterialPagesW100';

export default IconMaterialPagesW100;
