import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTexture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Texture'

      short_name='Texture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-120q-19-4-35.5-20.5T120-176l664-664q21 5 36 20.5t21 35.5L176-120Zm-56-252v-112l356-356h112L120-372Zm0-308v-80q0-33 23.5-56.5T200-840h80L120-680Zm560 560 160-160v80q0 33-23.5 56.5T760-120h-80Zm-308 0 468-468v112L484-120H372Z"/>
    </Icon>
  );
});

IconMaterialTexture.displayName = 'OnesyIconMaterialTexture';

export default IconMaterialTexture;
