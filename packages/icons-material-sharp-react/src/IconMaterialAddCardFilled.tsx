import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardFilled'

      short_name='AddCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-480h640v-160H160v160ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM80-160v-640h800v320H760q-83 0-141.5 58.5T560-280v120H80Z"/>
    </Icon>
  );
});

IconMaterialAddCardFilled.displayName = 'OnesyIconMaterialAddCardFilled';

export default IconMaterialAddCardFilled;
