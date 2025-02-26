import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterW100'

      short_name='Filter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-416h332L598-552 498-428l-64-74-66 86ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilterW100.displayName = 'OnesyIconMaterialFilterW100';

export default IconMaterialFilterW100;
