import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureW100Filled'

      short_name='PictureInPicture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm294-244h244q13 0 21.5-8.5T760-486v-164q0-13-8.5-21.5T730-680H486q-13 0-21.5 8.5T456-650v164q0 13 8.5 21.5T486-456Zm122-112Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureW100Filled.displayName = 'OnesyIconMaterialPictureInPictureW100Filled';

export default IconMaterialPictureInPictureW100Filled;
