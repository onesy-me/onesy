import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControllerGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenW100'

      short_name='ControllerGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-266q89 0 151.5-62.5T694-480q0-89-62.5-151.5T480-694q-89 0-151.5 62.5T266-480q0 89 62.5 151.5T480-266Zm0-28q-77 0-131.5-54.5T294-480q0-77 54.5-131.5T480-666q77 0 131.5 54.5T666-480q0 77-54.5 131.5T480-294Zm-10-176q5 5 10 5t10-5l56-56q5-5 5-10t-5-10q-5-5-10-5t-10 5l-56 56q-5 5-5 10t5 10ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialControllerGenW100.displayName = 'OnesyIconMaterialControllerGenW100';

export default IconMaterialControllerGenW100;
