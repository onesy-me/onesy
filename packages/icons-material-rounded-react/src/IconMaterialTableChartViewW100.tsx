import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartViewW100'

      short_name='TableChartView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-126q-5-5-5-10t5-10l188-188q17-17 42-17t42 17l75 75q9 9 23 9t23-9l174-174q4-4 9.5-4.5T873-433q5 5 5 10t-5 10L698-238q-17 17-42 17t-42-17l-75-75q-9-9-23-9t-23 9L306-126q-4 4-9.5 4.5T286-126Zm-94-46q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v138q0 13-8.5 21.5T718-560H160v328q0 12 10 22t22 10v28Zm-32-416h560v-140q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v140Zm0 0v-172 172Z"/>
    </Icon>
  );
});

IconMaterialTableChartViewW100.displayName = 'OnesyIconMaterialTableChartViewW100';

export default IconMaterialTableChartViewW100;
