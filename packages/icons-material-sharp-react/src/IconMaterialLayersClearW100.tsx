import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersClearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearW100'

      short_name='LayersClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m590-462-20-20 140-108-230-178-112 86-20-20 132-102 276 214-166 128Zm78 78-20-20 86-66 22 18-88 68ZM810-88 582-316l-102 78-276-214 22-18 254 196 81-63-57-57-24 18-276-214 58-46L74-824l20-20 736 736-20 20ZM469-582Z"/>
    </Icon>
  );
});

IconMaterialLayersClearW100.displayName = 'OnesyIconMaterialLayersClearW100';

export default IconMaterialLayersClearW100;
