import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureW100'

      short_name='Texture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-7-3-12-8t-8-12l596-596q7 3 12 8t8 12L192-172Zm-20-261v-40l315-315h40L172-433Zm0-281v-14q0-26 17-43t43-17h14l-74 74Zm542 542 74-74v14q0 26-17 43t-43 17h-14Zm-281 0 355-355v40L473-172h-40Z"/>
    </Icon>
  );
});

IconMaterialTextureW100.displayName = 'OnesyIconMaterialTextureW100';

export default IconMaterialTextureW100;
