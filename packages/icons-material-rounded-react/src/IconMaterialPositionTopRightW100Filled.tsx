import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionTopRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightW100Filled'

      short_name='PositionTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm182-430h240q14 0 24-10t10-24q0-14-10-24t-24-10H414q-14 0-24 10t-10 24q0 14 10 24t24 10Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightW100Filled.displayName = 'OnesyIconMaterialPositionTopRightW100Filled';

export default IconMaterialPositionTopRightW100Filled;
