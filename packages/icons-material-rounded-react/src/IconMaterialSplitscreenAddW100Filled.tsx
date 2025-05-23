import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddW100Filled'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-172h-78q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h78v-78q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v78h78q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-78v78q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-78ZM232-539q-26 0-43-17t-17-43.43v-128.14Q172-754 189-771t43-17h496q26 0 43 17t17 43.43v128.14Q788-573 771-556t-43 17H232Zm0 367q-26 0-43-17t-17-43.28v-127.44Q172-386 189-403t43-17h496q17 0 30 7.5t21 20.5v1q-3-1-5.5-1H768q-81 0-139 56t-61 136v28H232Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddW100Filled.displayName = 'OnesyIconMaterialSplitscreenAddW100Filled';

export default IconMaterialSplitscreenAddW100Filled;
