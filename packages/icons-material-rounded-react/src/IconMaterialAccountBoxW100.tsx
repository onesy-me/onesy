import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100'

      short_name='AccountBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-226q54-53 125.5-83.5T480-340q83 0 154.5 30.5T760-226v-502q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v502Zm280-210q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-10-28h516v-6q-56-54-121.5-80T480-312q-69 0-135 25.5T222-208v8Zm258-264q-35 0-60.5-25.5T394-550q0-35 25.5-60.5T480-636q35 0 60.5 25.5T566-550q0 35-25.5 60.5T480-464Zm0-29Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100.displayName = 'OnesyIconMaterialAccountBoxW100';

export default IconMaterialAccountBoxW100;
