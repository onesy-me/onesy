import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivateConnectivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivityW100'

      short_name='PrivateConnectivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-252q-91 0-157-62t-71-152H100v-28h152q5-90 71-152t157-62q91 0 157 62t71 152h152v28H708q-5 90-71 152t-157 62Zm0-28q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-114-72h228v-188h-40v-30q0-32.5-21-55.25T480.03-648q-31.03 0-52.53 21.74Q406-604.53 406-574v34h-40v188Zm114-66q-11 0-19.5-8.5T452-446q0-11 8.5-19.5T480-474q11 0 19.5 8.5T508-446q0 11-8.5 19.5T480-418Zm-46-122v-34q0-19 13.5-32.5T480-620q19 0 32.5 13.5T526-574v34h-92Zm46 94Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivityW100.displayName = 'OnesyIconMaterialPrivateConnectivityW100';

export default IconMaterialPrivateConnectivityW100;
