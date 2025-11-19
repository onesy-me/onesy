import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageMenuIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageMenuIosW100Filled'

      short_name='PageMenuIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h367q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm0-128q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm46-128q-26 0-43-17t-17-43v-240q0-26 17-43t43-17h496q26 0 43 17t17 43v240q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialPageMenuIosW100Filled.displayName = 'OnesyIconMaterialPageMenuIosW100Filled';

export default IconMaterialPageMenuIosW100Filled;
