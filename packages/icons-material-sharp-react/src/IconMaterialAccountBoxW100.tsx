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
      <path d="M200-226q54-53 125.5-83.5T480-340q83 0 154.5 30.5T760-226v-534H200v534Zm280-210q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM172-172v-616h616v616H172Zm50-28h516v-6q-56-54-121.5-80T480-312q-69 0-135 25.5T222-208v8Zm258-264q-35 0-60.5-25.5T394-550q0-35 25.5-60.5T480-636q35 0 60.5 25.5T566-550q0 35-25.5 60.5T480-464Zm0-29Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100.displayName = 'OnesyIconMaterialAccountBoxW100';

export default IconMaterialAccountBoxW100;
