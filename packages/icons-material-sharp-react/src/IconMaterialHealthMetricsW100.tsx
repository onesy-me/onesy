import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthMetricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100'

      short_name='HealthMetrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-140v-192H140v-296h192v-192h296v192h192v296H628v192H332ZM168-494h199l69 103 71-215h26l74 112h185v-106H600v-192H360v192H168v106Zm192 326h240v-192h192v-106H593l-69-103-71 215h-26l-75-112H168v106h192v192Zm120-312Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100.displayName = 'OnesyIconMaterialHealthMetricsW100';

export default IconMaterialHealthMetricsW100;
