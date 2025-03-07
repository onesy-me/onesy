import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltW100'

      short_name='PictureInPictureAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm326-42h244q13 0 21.5-8.5T760-312v-164q0-13-8.5-21.5T730-506H486q-13 0-21.5 8.5T456-476v164q0 13 8.5 21.5T486-282Zm-2-28v-168h248v168H484Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltW100.displayName = 'OnesyIconMaterialPictureInPictureAltW100';

export default IconMaterialPictureInPictureAltW100;
