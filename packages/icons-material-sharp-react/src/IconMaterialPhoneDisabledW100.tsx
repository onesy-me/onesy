import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledW100'

      short_name='PhoneDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M714-566q23-51 33.5-96.5T760-760H650l-25 114 89 80ZM200-200q45 1 93.5-9.5T382-240l-86-88-96 19v109Zm452-217-20-20q13-16 30.5-41.5T701-540l-106-96 33-152h160v29q0 88-37 179t-99 163ZM201-172h-29v-159l135-27 102 105q47-26 84-51.5t66-52.5L132-784l20-20 656 656-20 20-209-209q-83 78-182.5 121.5T201-172Zm513-394ZM382-240Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledW100.displayName = 'OnesyIconMaterialPhoneDisabledW100';

export default IconMaterialPhoneDisabledW100;
