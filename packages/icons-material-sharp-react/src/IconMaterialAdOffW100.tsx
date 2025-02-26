import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOffW100'

      short_name='AdOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m772-148-24-24H172v-576l-24-24 20-20 624 624-20 20Zm-572-52h520L200-720v520Zm588-85-28-28v-319H441L285-788h503v503Z"/>
    </Icon>
  );
});

IconMaterialAdOffW100.displayName = 'OnesyIconMaterialAdOffW100';

export default IconMaterialAdOffW100;
