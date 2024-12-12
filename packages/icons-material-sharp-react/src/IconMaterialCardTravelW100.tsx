import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200h640v-102H160v102Zm-28 28v-496h200v-120h296v120h200v496H132Zm28-206h640v-262H628v60h-28v-60H360v60h-28v-60H160v262Zm200-290h240v-92H360v92ZM160-200v-440 60-60 60-60 440Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100.displayName = 'OnesyIconMaterialCardTravelW100';

export default IconMaterialCardTravelW100;
