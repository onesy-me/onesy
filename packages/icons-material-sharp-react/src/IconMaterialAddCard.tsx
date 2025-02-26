import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCard'

      short_name='AddCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v320H160v240h400v80H80Zm80-480h640v-80H160v80ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAddCard.displayName = 'OnesyIconMaterialAddCard';

export default IconMaterialAddCard;
