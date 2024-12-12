import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCozyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCozyW100Filled'

      short_name='ViewCozy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-540v-248h248v248H172Zm0 368v-248h248v248H172Zm368-368v-248h248v248H540Zm0 368v-248h248v248H540Z"/>
    </Icon>
  );
});

IconMaterialViewCozyW100Filled.displayName = 'OnesyIconMaterialViewCozyW100Filled';

export default IconMaterialViewCozyW100Filled;
