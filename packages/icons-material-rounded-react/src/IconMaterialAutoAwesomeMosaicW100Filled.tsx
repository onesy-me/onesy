import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMosaicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicW100Filled'

      short_name='AutoAwesomeMosaic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-172H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h208v616Zm80-348v-268h208q26 0 43 17t17 43v208H520Zm0 348v-268h268v208q0 26-17 43t-43 17H520Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100Filled.displayName = 'OnesyIconMaterialAutoAwesomeMosaicW100Filled';

export default IconMaterialAutoAwesomeMosaicW100Filled;
