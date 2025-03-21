import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureLargeW100Filled'

      short_name='PictureInPictureLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-340q-12.75 0-21.37-8.63Q236-357.25 236-370v-324q0-12.75 8.63-21.38Q253.25-724 266-724h404q12.75 0 21.38 8.62Q700-706.75 700-694v324q0 12.75-8.62 21.37Q682.75-340 670-340H266ZM146-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h622q12 0 22-10t10-22v-462q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v462q0 26-17 43t-43 17H146Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureLargeW100Filled.displayName = 'OnesyIconMaterialPictureInPictureLargeW100Filled';

export default IconMaterialPictureInPictureLargeW100Filled;
