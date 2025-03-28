import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOffFilled'

      short_name='SearchOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-252 56 57q6 6 14 6t14-6q6-6 6-14.5t-6-14.5l-56-56 57-57q6-6 6-14t-6-14q-6-6-14-6t-14 6l-57 57-57-57q-6-6-14-6t-14 6q-6 6-6 14t6 14l57 57-57 57q-6 6-6 14t6 14q6 6 14 6t14-6l57-57Zm0 172q-83 0-141.5-58.5T80-280q0-83 58.5-141.5T280-480q83 0 141.5 58.5T480-280q0 83-58.5 141.5T280-80Zm288-296q-12-13-25.5-26.5T516-428q38-24 61-64t23-88q0-75-52.5-127.5T420-760q-75 0-127.5 52.5T240-580q0 6 .5 11.5T242-557q-18 2-39.5 8T164-535q-2-11-3-22t-1-23q0-109 75.5-184.5T420-840q109 0 184.5 75.5T680-580q0 43-13.5 81.5T629-428l223 224q11 11 11.5 27.5T852-148q-11 11-28 11t-28-11L568-376Z"/>
    </Icon>
  );
});

IconMaterialSearchOffFilled.displayName = 'OnesyIconMaterialSearchOffFilled';

export default IconMaterialSearchOffFilled;
