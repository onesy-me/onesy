import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandContentW100Filled'

      short_name='ExpandContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-252v-188h28v160h160v28H252Zm428-268v-160H520v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialExpandContentW100Filled.displayName = 'OnesyIconMaterialExpandContentW100Filled';

export default IconMaterialExpandContentW100Filled;
