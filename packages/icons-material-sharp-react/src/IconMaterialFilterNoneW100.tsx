import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterNoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneW100'

      short_name='FilterNone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneW100.displayName = 'OnesyIconMaterialFilterNoneW100';

export default IconMaterialFilterNoneW100;
