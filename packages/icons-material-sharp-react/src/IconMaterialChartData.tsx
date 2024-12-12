import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChartData = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartData'

      short_name='ChartData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialChartData.displayName = 'OnesyIconMaterialChartData';

export default IconMaterialChartData;
