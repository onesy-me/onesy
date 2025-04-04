import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayW100'

      short_name='PlaylistPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-332q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h241q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h398q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h398q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm500 465q-4 2-7.5 2.5T671-186q-4-2-6-5t-2-8v-158q0-4.8 2-8.4 2-3.6 6-5.6 4-2 7.5-1.5t7.5 2.5l123 79q3.89 2.32 5.44 5.8 1.56 3.47 1.56 7.34 0 3.86-1.56 7.23-1.55 3.38-5.44 5.63l-123 78Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlayW100.displayName = 'OnesyIconMaterialPlaylistPlayW100';

export default IconMaterialPlaylistPlayW100;
