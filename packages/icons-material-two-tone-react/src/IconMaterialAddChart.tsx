import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChart'

      short_name='AddChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="10" width="2" x="11" y="7"/><rect height="4" width="2" x="15" y="13"/><path d="M19,19H5V5h9V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-9h-2V19z"/><rect height="7" width="2" x="7" y="10"/><polygon points="19,5 19,3 17,3 17,5 15,5 15,7 17,7 17,9 19,9 19,7 21,7 21,5"/></g></g>
    </Icon>
  );
});

IconMaterialAddChart.displayName = 'OnesyIconMaterialAddChart';

export default IconMaterialAddChart;
