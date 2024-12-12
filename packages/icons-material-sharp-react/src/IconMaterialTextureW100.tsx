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
      <path d="M181-181v-20l578-578h20v20L201-181h-20Zm-9-252v-40l315-315h40L172-433Zm0-281v-74h74l-74 74Zm542 542 74-74v74h-74Zm-281 0 355-355v40L473-172h-40Z"/>
    </Icon>
  );
});

IconMaterialTextureW100.displayName = 'OnesyIconMaterialTextureW100';

export default IconMaterialTextureW100;
