import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOffW100'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-456q12.5 0 21.25-8.75T760-486v-164q0-12.5-8.75-21.25T730-680H470q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h262v168H622q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.1 9.96 4.1 4 9.9 4h108Zm84.18 202q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-420q0-14-9-23t-23-9H348q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T348-748h420q26 0 43 17t17 43v420q0 7-4.32 10.5t-9.5 3.5ZM576-496Zm-156 16ZM842-78 708-212H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-48q-12 0-22 10t-10 22v416q0 12 10 22t22 10h488L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOffW100.displayName = 'OnesyIconMaterialPictureInPictureOffW100';

export default IconMaterialPictureInPictureOffW100;
