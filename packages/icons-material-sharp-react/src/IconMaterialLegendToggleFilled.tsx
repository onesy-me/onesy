import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLegendToggleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleFilled'

      short_name='LegendToggle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-94l240-146 200 142 200-142v98L600-520 397-664 160-520Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleFilled.displayName = 'OnesyIconMaterialLegendToggleFilled';

export default IconMaterialLegendToggleFilled;
