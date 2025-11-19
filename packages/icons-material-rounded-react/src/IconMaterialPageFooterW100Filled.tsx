import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageFooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageFooterW100Filled'

      short_name='PageFooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-172H186q-6 0-10-4t-4-10q0-6 4-10t10-4h588q6 0 10 4t4 10q0 6-4 10t-10 4ZM232-300q-26 0-43-17t-17-43v-368q0-26 17-43t43-17h496q26 0 43 17t17 43v368q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialPageFooterW100Filled.displayName = 'OnesyIconMaterialPageFooterW100Filled';

export default IconMaterialPageFooterW100Filled;
