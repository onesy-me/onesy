import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextureAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureAddFilled'

      short_name='TextureAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-120h-56v-56l664-664h57v56L176-120Zm-56-252v-112l356-356h112L120-372Zm0-308v-160h160L120-680Zm720 92v112l-19 19q-20-10-42.5-15.5T732-480l108-108ZM372-120l108-108q2 24 7.5 46.5T503-139l-19 19H372Zm308-80H560v-80h120v-120h80v120h120v80H760v120h-80v-120Z"/>
    </Icon>
  );
});

IconMaterialTextureAddFilled.displayName = 'OnesyIconMaterialTextureAddFilled';

export default IconMaterialTextureAddFilled;
