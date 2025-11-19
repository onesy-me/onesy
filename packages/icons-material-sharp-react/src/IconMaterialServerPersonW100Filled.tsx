import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialServerPersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServerPersonW100Filled'

      short_name='ServerPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h537v696H603l-36-74H394l-36 74H212Zm144-261h248v-2q0-39-39.5-52.5T480-461q-45 0-84.5 13.5T356-395v2Zm124-140q23 0 38.5-15.5T534-587q0-23-15.5-38.5T480-641q-23 0-38.5 15.5T426-587q0 23 15.5 38.5T480-533Z"/>
    </Icon>
  );
});

IconMaterialServerPersonW100Filled.displayName = 'OnesyIconMaterialServerPersonW100Filled';

export default IconMaterialServerPersonW100Filled;
