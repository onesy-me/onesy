import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighFilled'

      short_name='BacklightHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-360v-80h160v80H40Zm214-210L141-683l56-57 113 114-56 56Zm26 330v-120h400v120H280Zm160-440v-200h80v200h-80Zm266 110-56-56 113-113 57 56-114 113Zm54 210v-80h160v80H760Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighFilled.displayName = 'OnesyIconMaterialBacklightHighFilled';

export default IconMaterialBacklightHighFilled;
