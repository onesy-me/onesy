import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAlt'

      short_name='PanToolAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M341-120 46-483l71-68 163 114v-443h80v597l-111-78 130 161h381v-400h80v480H341Zm99-320v-280h80v280h-80Zm160 0v-240h80v240h-80Zm-40 80Z"/>
    </Icon>
  );
});

IconMaterialPanToolAlt.displayName = 'OnesyIconMaterialPanToolAlt';

export default IconMaterialPanToolAlt;
