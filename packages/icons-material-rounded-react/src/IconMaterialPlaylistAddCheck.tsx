import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheck'

      short_name='PlaylistAddCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h240q17 0 28.5 11.5T440-360q0 17-11.5 28.5T400-320H160Zm0-160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h400q17 0 28.5 11.5T600-520q0 17-11.5 28.5T560-480H160Zm0-160q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h400q17 0 28.5 11.5T600-680q0 17-11.5 28.5T560-640H160Zm494 423q-8 0-15-2.5t-13-8.5l-86-86q-11-11-11.5-27.5T540-370q11-11 27.5-11.5T596-371l58 57 141-141q12-12 28.5-11.5T852-454q11 12 11.5 28T852-398L682-228q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheck.displayName = 'OnesyIconMaterialPlaylistAddCheck';

export default IconMaterialPlaylistAddCheck;
