import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLow'

      short_name='BacklightLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-80h120v80H80Zm174-210-85-85 56-56 85 85-56 56Zm26 330v-120h400v120H280Zm160-440v-120h80v120h-80Zm266 111-56-57 85-85 56 57-85 85Zm54 209v-80h120v80H760Z"/>
    </Icon>
  );
});

IconMaterialBacklightLow.displayName = 'OnesyIconMaterialBacklightLow';

export default IconMaterialBacklightLow;
