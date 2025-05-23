import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMultilineChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChartW100Filled'

      short_name='MultilineChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M809-324q0 6-4 10t-10 4q-6 0-10-4t-4-10q-8-45-27-96t-49-104L577-383q-17 19-43 19.5T490-381l-90-90q-10-10-23.5-10T354-471L149-264q-4 5-9.5 5t-10.5-5q-5-5-4.5-10t4.5-10l206-207q17-18 42.5-17.5T420-491l91 91q10 10 24 10t23-11l131-147q-62-72-139.5-114T383-704q-69 0-131 23.5T137-616q-2 2-4.5 3t-5.5 1q-6 0-10-4t-4-10q0-3 1-5.5t3-4.5q56-45 123.5-70.5T383-732q92 0 174 42.5T707-570l106-119q4-5 10-5t11 5q4 4 4 9t-4 10L723-546q31 48 53.5 106T809-324Z"/>
    </Icon>
  );
});

IconMaterialMultilineChartW100Filled.displayName = 'OnesyIconMaterialMultilineChartW100Filled';

export default IconMaterialMultilineChartW100Filled;
