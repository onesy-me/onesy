import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemoveW100'

      short_name='PlaylistRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m685-220-94 94q-4 4-9.5 4.5T571-126q-5-5-5-10t5-10l94-94-94-94q-4-4-4.5-9.5T571-354q5-5 10-5t10 5l94 94 94-94q4-4 9.5-4.5T799-354q5 5 5 10t-5 10l-94 94 94 94q4 4 4.5 9.5T799-126q-5 5-10 5t-10-5l-94-94ZM165-346q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H165Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h412q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H165Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h412q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H165Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemoveW100.displayName = 'OnesyIconMaterialPlaylistRemoveW100';

export default IconMaterialPlaylistRemoveW100;
