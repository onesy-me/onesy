import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChartDataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataW100'

      short_name='ChartData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m418-478 59 59q8 9 20.5 9t21.5-9l147-146v86q0 5 4 9t10 4q5 0 9.5-4t4.5-10v-104q0-12-9-21t-21-9H559q-5 0-9 4.5t-4 9.5q0 6 4 10t10 4h85L498-437l-59-59q-9-9-21.5-9t-20.5 9L286-386q-4 5-4 10.5t4 9.5q5 5 10.5 5t9.5-5l112-112ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialChartDataW100.displayName = 'OnesyIconMaterialChartDataW100';

export default IconMaterialChartDataW100;
