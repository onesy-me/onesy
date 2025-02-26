import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndW100Filled'

      short_name='LineEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-406q-27 0-47.5-17T707-466H106v-28h601q5-26 25.5-43t47.5-17q31.08 0 52.54 21.44Q854-511.11 854-480.06q0 31.06-21.46 52.56Q811.08-406 780-406Z"/>
    </Icon>
  );
});

IconMaterialLineEndW100Filled.displayName = 'OnesyIconMaterialLineEndW100Filled';

export default IconMaterialLineEndW100Filled;
