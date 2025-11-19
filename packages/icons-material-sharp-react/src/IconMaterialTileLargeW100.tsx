import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileLargeW100'

      short_name='TileLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-185h257v185H172Zm357 0v-185h259v185H529Zm-329-28h201v-129H200v129Zm357 0h203v-129H557v129ZM172-457v-331h616v331H172Zm129 192Zm358 0Z"/>
    </Icon>
  );
});

IconMaterialTileLargeW100.displayName = 'OnesyIconMaterialTileLargeW100';

export default IconMaterialTileLargeW100;
