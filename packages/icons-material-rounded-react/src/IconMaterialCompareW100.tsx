import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareW100'

      short_name='Compare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-172H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h220v-78q0-6 4-10t10-4q6 0 10 4t4 10v772q0 6-4 10t-10 4q-6 0-10-4t-4-10v-78Zm-252-68h252v-302L200-240Zm360 68v-308l200 240v-488q0-12-10-22t-22-10H560v-28h168q26 0 43 17t17 43v496q0 26-17 43t-43 17H560Z"/>
    </Icon>
  );
});

IconMaterialCompareW100.displayName = 'OnesyIconMaterialCompareW100';

export default IconMaterialCompareW100;
