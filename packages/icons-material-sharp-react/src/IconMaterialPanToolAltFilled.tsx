import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltFilled'

      short_name='PanToolAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M341-120 46-483l71-68 163 114v-443h80v360h80v-200h80v200h80v-160h80v160h80v-80h80v480H341Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltFilled.displayName = 'OnesyIconMaterialPanToolAltFilled';

export default IconMaterialPanToolAltFilled;
