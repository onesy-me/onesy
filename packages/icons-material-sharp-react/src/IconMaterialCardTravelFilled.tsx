import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelFilled'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h200v-160h400v160h200v600H80Zm280-600h240v-80H360v80ZM160-280h640v-120H160v120Z"/>
    </Icon>
  );
});

IconMaterialCardTravelFilled.displayName = 'OnesyIconMaterialCardTravelFilled';

export default IconMaterialCardTravelFilled;
