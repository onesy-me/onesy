import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestFilled'

      short_name='Forest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-80v-120h160v120H520Zm-240 0v-160H0l154-240H80l280-400 280 400h-74l155 240H440v160H280Zm490-160L640-440h77L505-743l95-137 280 400h-74l154 240H770Z"/>
    </Icon>
  );
});

IconMaterialForestFilled.displayName = 'OnesyIconMaterialForestFilled';

export default IconMaterialForestFilled;
