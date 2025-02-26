import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer3SelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectW100Filled'

      short_name='Timer3Select'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-246v-28h240v-192H206v-28h240v-192H206v-28h268v220l-14 14 14 14v220H206Zm400 0v-28h160v-92H606v-148h188v28H634v92h160v148H606Z"/>
    </Icon>
  );
});

IconMaterialTimer3SelectW100Filled.displayName = 'OnesyIconMaterialTimer3SelectW100Filled';

export default IconMaterialTimer3SelectW100Filled;
