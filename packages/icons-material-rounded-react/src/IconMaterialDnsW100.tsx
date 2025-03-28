import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDnsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsW100'

      short_name='Dns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300.12-662Q286-662 276-652.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10t24.12-9.88q10-9.88 10-24T324.12-652q-9.88-10-24-10Zm0 336Q286-326 276-316.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10t24.12-9.88q10-9.88 10-24T324.12-316q-9.88-10-24-10ZM200-756h560q11.9 0 19.95 7.98 8.05 7.98 8.05 19.77V-534q0 15-8.05 24.5T760-500H200q-11.9 0-19.95-9.5Q172-519 172-534v-194.25q0-11.79 8.05-19.77T200-756Zm0 28v200h560v-200H200Zm0 308h558q14 0 22 9.2t8 22.8v188q0 17-8 26.5t-22 9.5H202q-14 0-22-9.5t-8-26.5v-188q0-13.6 7-22.8 7-9.2 21-9.2Zm0 28v200h560v-200H200Zm0-336v200-200Zm0 336v200-200Z"/>
    </Icon>
  );
});

IconMaterialDnsW100.displayName = 'OnesyIconMaterialDnsW100';

export default IconMaterialDnsW100;
