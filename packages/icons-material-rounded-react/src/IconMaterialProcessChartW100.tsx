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
      <path d="M138-263q-5-2-7-8t0-11l205-409q2-5 7.5-6.5t10.5.5q5 2 7 8t0 11L156-269q-2 5-7.5 6.5T138-263Zm234 0q-5-2-7-8t0-11l205-409q2-5 7.5-6.5t10.5.5q5 2 7 8t0 11L390-269q-2 5-7.5 6.5T372-263Zm234 0q-5-2-7-8t0-11l205-409q2-5 7.5-6.5t10.5.5q5 2 7 8t0 11L624-269q-2 5-7.5 6.5T606-263Z"/>
    </Icon>
  );
});

IconMaterialProcessChartW100.displayName = 'OnesyIconMaterialProcessChartW100';

export default IconMaterialProcessChartW100;
