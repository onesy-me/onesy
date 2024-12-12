import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100'

      short_name='TableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-442h560v-146H200v146Zm0 414h120v-386H200v386Zm440 0h120v-386H640v386Zm-292 0h264v-386H348v386Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100.displayName = 'OnesyIconMaterialTableChartW100';

export default IconMaterialTableChartW100;
