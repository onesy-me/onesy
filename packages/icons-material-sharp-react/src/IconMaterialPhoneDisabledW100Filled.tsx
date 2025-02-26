import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledW100Filled'

      short_name='PhoneDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m652-417-20-20q13-16 30.5-41.5T701-540l-106-96 33-152h160v29q0 88-37 179t-99 163ZM201-172h-29v-159l135-27 102 105q47-26 84-51.5t66-52.5L132-784l20-20 656 656-20 20-209-209q-83 78-182.5 121.5T201-172Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledW100Filled.displayName = 'OnesyIconMaterialPhoneDisabledW100Filled';

export default IconMaterialPhoneDisabledW100Filled;
