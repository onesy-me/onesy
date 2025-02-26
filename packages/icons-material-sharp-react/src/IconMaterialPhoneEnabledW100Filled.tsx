import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneEnabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledW100Filled'

      short_name='PhoneEnabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M201-172h-29v-159l135-27 101 106q55-30 97-60t75-65q32-32 62-72.5t59-90.5l-106-96 33-152h160v29q0 101-49 206.5T602-358q-89 89-193.5 137.5T201-172Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledW100Filled.displayName = 'OnesyIconMaterialPhoneEnabledW100Filled';

export default IconMaterialPhoneEnabledW100Filled;
