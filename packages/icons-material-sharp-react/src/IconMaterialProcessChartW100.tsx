import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcessChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartW100'

      short_name='ProcessChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m150-257-25-12 217-434 25 12-217 434Zm234 0-25-12 217-434 25 12-217 434Zm234 0-25-12 217-434 25 12-217 434Z"/>
    </Icon>
  );
});

IconMaterialProcessChartW100.displayName = 'OnesyIconMaterialProcessChartW100';

export default IconMaterialProcessChartW100;
