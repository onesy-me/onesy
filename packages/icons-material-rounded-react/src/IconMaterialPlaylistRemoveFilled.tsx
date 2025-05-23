import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemoveFilled'

      short_name='PlaylistRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-184-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76ZM160-320q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h200q17 0 28.5 11.5T400-360q0 17-11.5 28.5T360-320H160Zm0-160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h360q17 0 28.5 11.5T560-520q0 17-11.5 28.5T520-480H160Zm0-160q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h360q17 0 28.5 11.5T560-680q0 17-11.5 28.5T520-640H160Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemoveFilled.displayName = 'OnesyIconMaterialPlaylistRemoveFilled';

export default IconMaterialPlaylistRemoveFilled;
