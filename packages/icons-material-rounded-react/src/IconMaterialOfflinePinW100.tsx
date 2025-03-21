import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflinePinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinW100'

      short_name='OfflinePin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-306h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm78-170-76-76q-4-4-9.5-4.5T342-552q-5 5-5 10t5 10l75 75q9 9 21 9t21-9l159-159q4-4 4.5-9.5T618-636q-5-5-10-5t-10 5L438-476Zm42.17 344q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinW100.displayName = 'OnesyIconMaterialOfflinePinW100';

export default IconMaterialOfflinePinW100;
