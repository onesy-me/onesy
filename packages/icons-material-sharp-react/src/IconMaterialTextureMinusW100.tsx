import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextureMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureMinusW100'

      short_name='TextureMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172h-20v-20l596-596h20v20L192-172Zm241 0 27-27v27h-27Zm127-100v-28h268v28H560ZM172-433v-40l315-315h40L172-433Zm489 33 127-127v40l-87 87h-40ZM172-714v-74h74l-74 74Z"/>
    </Icon>
  );
});

IconMaterialTextureMinusW100.displayName = 'OnesyIconMaterialTextureMinusW100';

export default IconMaterialTextureMinusW100;
