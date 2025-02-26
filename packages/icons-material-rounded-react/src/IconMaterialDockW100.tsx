import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-138q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360q-6 0-10-4t-4-10Zm6-94q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h256q26 0 43 17t17 43v496q0 26-17 43t-43 17H352Zm-32-94v34q0 12 10 22t22 10h256q12 0 22-10t10-22v-34H320Zm0-28h320v-372H320v372Zm0-400h320v-34q0-12-10-22t-22-10H352q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 428v66-66Z"/>
    </Icon>
  );
});

IconMaterialDockW100.displayName = 'OnesyIconMaterialDockW100';

export default IconMaterialDockW100;
