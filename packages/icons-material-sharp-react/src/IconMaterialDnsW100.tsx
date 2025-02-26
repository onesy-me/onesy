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
      <path d="M300.12-662Q286-662 276-652.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10t24.12-9.88q10-9.88 10-24T324.12-652q-9.88-10-24-10Zm0 336Q286-326 276-316.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10t24.12-9.88q10-9.88 10-24T324.12-316q-9.88-10-24-10ZM172-500v-256h616v256H172Zm28-228v200h560v-200H200Zm-28 564v-256h616v256H172Zm28-228v200h560v-200H200Zm0-336v200-200Zm0 336v200-200Z"/>
    </Icon>
  );
});

IconMaterialDnsW100.displayName = 'OnesyIconMaterialDnsW100';

export default IconMaterialDnsW100;
