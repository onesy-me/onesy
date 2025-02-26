import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSmallW100'

      short_name='PictureInPictureSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h622q12 0 22-10t10-22v-462q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v462q0 26-17 43t-43 17H146Zm280-128q-12.75 0-21.37-8.63Q396-357.25 396-370v-164q0-12.75 8.63-21.38Q413.25-564 426-564h244q12.75 0 21.38 8.62Q700-546.75 700-534v164q0 12.75-8.62 21.37Q682.75-340 670-340H426Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSmallW100.displayName = 'OnesyIconMaterialPictureInPictureSmallW100';

export default IconMaterialPictureInPictureSmallW100;
