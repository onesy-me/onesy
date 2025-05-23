import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleW100Filled'

      short_name='BuildCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m643-278 32-32q5-4.91 5-11.45 0-6.55-5-11.55L518-490q7-12 10.5-26.5T532-548q0-51.63-36.98-88.32Q458.04-673 406-673q-8.16 0-15.58 1t-14.79 3q-6.63 2-8.13 9-1.5 7 3.5 12l66 67-64 64-68-67q-5-5-12-3.5t-9.4 8.42q-1.8 7.7-2.7 15.39Q280-556 280-548q0 52.04 36.98 89.02T406-422q15.89 0 29.94-4Q450-430 464-436l157 157q5 5 11 5.5t11-4.5ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleW100Filled.displayName = 'OnesyIconMaterialBuildCircleW100Filled';

export default IconMaterialBuildCircleW100Filled;
