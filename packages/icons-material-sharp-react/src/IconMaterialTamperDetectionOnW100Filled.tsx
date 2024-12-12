import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTamperDetectionOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnW100Filled'

      short_name='TamperDetectionOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M467-276v-326H157v-210h536v248l110-110v260L693-524v248H467Zm-100 64H196l-92-92 20-22 47 47v-198h28v105h28v-150h28v150h28v-130h28v130h28v-100h28v260Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnW100Filled.displayName = 'OnesyIconMaterialTamperDetectionOnW100Filled';

export default IconMaterialTamperDetectionOnW100Filled;
