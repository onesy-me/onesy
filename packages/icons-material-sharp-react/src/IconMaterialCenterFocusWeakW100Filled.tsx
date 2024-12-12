import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCenterFocusWeakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusWeakW100Filled'

      short_name='CenterFocusWeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-372q-44.55 0-76.27-31.73Q372-435.45 372-480t31.73-76.28Q435.45-588 480-588t76.28 31.72Q588-524.55 588-480t-31.72 76.27Q524.55-372 480-372ZM172-172v-188h28v160h160v28H172Zm428 0v-28h160v-160h28v188H600ZM172-600v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusWeakW100Filled.displayName = 'OnesyIconMaterialCenterFocusWeakW100Filled';

export default IconMaterialCenterFocusWeakW100Filled;
