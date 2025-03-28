import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersClearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearFilled'

      short_name='LayersClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M644-448 330-764l150-116 360 280-196 152Zm115 114-58-58 73-56 66 50-81 64Zm33 258L632-236 480-118 120-398l66-50 294 228 94-73-57-56-37 29-360-280 83-65L55-811l57-57 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialLayersClearFilled.displayName = 'OnesyIconMaterialLayersClearFilled';

export default IconMaterialLayersClearFilled;
