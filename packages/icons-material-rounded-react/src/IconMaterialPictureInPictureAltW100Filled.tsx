import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltW100Filled'

      short_name='PictureInPictureAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm294-70h244q13 0 21.5-8.5T760-312v-164q0-13-8.5-21.5T730-506H486q-13 0-21.5 8.5T456-476v164q0 13 8.5 21.5T486-282Zm122-112Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltW100Filled.displayName = 'OnesyIconMaterialPictureInPictureAltW100Filled';

export default IconMaterialPictureInPictureAltW100Filled;
