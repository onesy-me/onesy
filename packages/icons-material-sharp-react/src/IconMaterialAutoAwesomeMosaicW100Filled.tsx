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
      <path d="M440-172H172v-616h268v616Zm80-348v-268h268v268H520Zm0 348v-268h268v268H520Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100Filled.displayName = 'OnesyIconMaterialAutoAwesomeMosaicW100Filled';

export default IconMaterialAutoAwesomeMosaicW100Filled;
