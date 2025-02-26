import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolFilled'

      short_name='PanTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-40 48-465l69-66 163 114v-423h80v360h80v-440h80v440h80v-400h80v400h80v-320h80v760H339Z"/>
    </Icon>
  );
});

IconMaterialPanToolFilled.displayName = 'OnesyIconMaterialPanToolFilled';

export default IconMaterialPanToolFilled;
