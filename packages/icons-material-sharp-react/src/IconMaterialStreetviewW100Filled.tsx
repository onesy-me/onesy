import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreetviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreetviewW100Filled'

      short_name='Streetview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-520q-66.4 0-113.2-46.8T520-680q0-66.4 46.8-113.2T680-840q66.4 0 113.2 46.8T840-680q0 66.4-46.8 113.2T680-520ZM220-220q-9.17-9.03-14.58-20.51Q200-252 200-264v-448q0-26.4 18.91-45.2 18.91-18.8 45.46-18.8H480q-12 21.48-18 45.74t-6 49.93q0 47.32 18 87.82Q492-552 522-522L220-220Zm268 20v-174q0-33.14 21-59.57T562-468q29-6 58.5-9t59.5-3q25.67 0 49.34 1.5Q753-477 776-472v208q0 26.4-18.8 45.2Q738.4-200 712-200H488Z"/>
    </Icon>
  );
});

IconMaterialStreetviewW100Filled.displayName = 'OnesyIconMaterialStreetviewW100Filled';

export default IconMaterialStreetviewW100Filled;
