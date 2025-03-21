import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControllerGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenW100Filled'

      short_name='ControllerGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-266q89.12 0 151.62-62.38t62.5-151.5q0-89.12-62.38-151.62T480.12-694Q391-694 328.5-631.62T266-480.12q0 89.12 62.38 151.62t151.5 62.5Zm-.07-28Q403-294 348.5-348.69q-54.5-54.7-54.5-131.5 0-76.81 54.69-131.31 54.7-54.5 131.5-54.5 76.81 0 131.31 54.69 54.5 54.7 54.5 131.5 0 76.81-54.69 131.31-54.7 54.5-131.5 54.5ZM470-470q5 5 10 5t10-5l56-56q5-5 5-10t-5-10q-5-5-10-5t-10 5l-56 56q-5 5-5 10t5 10ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialControllerGenW100Filled.displayName = 'OnesyIconMaterialControllerGenW100Filled';

export default IconMaterialControllerGenW100Filled;
