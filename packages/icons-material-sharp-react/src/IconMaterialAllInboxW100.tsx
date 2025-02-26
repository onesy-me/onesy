import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxW100'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M294-320h480v-140H650q-11 38-43.5 59T534-380q-40 0-72.5-21T418-460H294v140Zm240-88q37 0 65-22.5t28-57.5h147v-312H294v312h147q0 35 28 57.5t65 22.5ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Zm136-136h480-480Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100.displayName = 'OnesyIconMaterialAllInboxW100';

export default IconMaterialAllInboxW100;
