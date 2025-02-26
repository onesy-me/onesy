import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChartW100'

      short_name='InsertChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm132 226q-6 0-10 4t-4 10v200q0 6 4 10t10 4q6 0 10-4t4-10v-200q0-6-4-10t-10-4Zm148-120q-6 0-10 4t-4 10v320q0 6 4 10t10 4q6 0 10-4t4-10v-320q0-6-4-10t-10-4Zm148 240q-6 0-10 4t-4 10v80q0 6 4 10t10 4q6 0 10-4t4-10v-80q0-6-4-10t-10-4Z"/>
    </Icon>
  );
});

IconMaterialInsertChartW100.displayName = 'OnesyIconMaterialInsertChartW100';

export default IconMaterialInsertChartW100;
