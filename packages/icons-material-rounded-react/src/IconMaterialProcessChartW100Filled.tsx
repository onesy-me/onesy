import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcessChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartW100Filled'

      short_name='ProcessChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M108-263q-5-2-7-8t0-11l205-409q2-5 7.5-6.5t10.5.5q5 2 7 8t0 11L126-269q-2 5-7.5 6.5T108-263Zm234 0q-5-2-7-8t0-11l205-409q2-5 7.5-6.5t10.5.5q5 2 7 8t0 11L360-269q-2 5-7.5 6.5T342-263Zm234 0q-5-2-7-8t0-11l205-409q2-5 7.5-6.5t10.5.5q5 2 7 8t0 11L594-269q-2 5-7.5 6.5T576-263Z"/>
    </Icon>
  );
});

IconMaterialProcessChartW100Filled.displayName = 'OnesyIconMaterialProcessChartW100Filled';

export default IconMaterialProcessChartW100Filled;
