import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMediumW100Filled'

      short_name='PictureInPictureMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-340q-12.75 0-21.37-8.63Q316-357.25 316-370v-244q0-12.75 8.63-21.38Q333.25-644 346-644h324q12.75 0 21.38 8.62Q700-626.75 700-614v244q0 12.75-8.62 21.37Q682.75-340 670-340H346ZM146-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h622q12 0 22-10t10-22v-462q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v462q0 26-17 43t-43 17H146Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMediumW100Filled.displayName = 'OnesyIconMaterialPictureInPictureMediumW100Filled';

export default IconMaterialPictureInPictureMediumW100Filled;
