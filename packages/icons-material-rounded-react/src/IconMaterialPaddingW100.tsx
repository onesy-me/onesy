import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaddingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingW100'

      short_name='Padding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-606q11 0 19.5-8.5T354-634q0-11-8.5-19.5T326-662q-11 0-19.5 8.5T298-634q0 11 8.5 19.5T326-606Zm154 0q11 0 19.5-8.5T508-634q0-11-8.5-19.5T480-662q-11 0-19.5 8.5T452-634q0 11 8.5 19.5T480-606Zm154 0q11 0 19.5-8.5T662-634q0-11-8.5-19.5T634-662q-11 0-19.5 8.5T606-634q0 11 8.5 19.5T634-606ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPaddingW100.displayName = 'OnesyIconMaterialPaddingW100';

export default IconMaterialPaddingW100;
