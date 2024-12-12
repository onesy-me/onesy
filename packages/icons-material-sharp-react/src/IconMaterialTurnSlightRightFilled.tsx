import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSlightRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRightFilled'

      short_name='TurnSlightRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-336l224-224h-90v-80h226v226h-80v-90L440-464v304h-80Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRightFilled.displayName = 'OnesyIconMaterialTurnSlightRightFilled';

export default IconMaterialTurnSlightRightFilled;
