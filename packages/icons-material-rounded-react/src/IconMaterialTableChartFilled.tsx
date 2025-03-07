import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartFilled'

      short_name='TableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-640v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v120H120Zm80 520q-33 0-56.5-23.5T120-200v-360h180v440H200Zm460 0v-440h180v360q0 33-23.5 56.5T760-120H660Zm-280 0v-440h200v440H380Z"/>
    </Icon>
  );
});

IconMaterialTableChartFilled.displayName = 'OnesyIconMaterialTableChartFilled';

export default IconMaterialTableChartFilled;
