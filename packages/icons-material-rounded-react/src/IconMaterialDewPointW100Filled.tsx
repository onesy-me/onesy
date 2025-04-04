import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDewPointW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DewPointW100Filled'

      short_name='DewPoint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-546q-14 0-24-10t-10-24q0-9 3-17t8-15q5-7 11-14l12-14 12 14q6 7 11 14t8 15q3 8 3 17 0 14-10 24t-24 10Zm160-120q-14 0-24-10t-10-24q0-9 3-17t8-15q5-7 11-14l12-14 12 14q6 7 11 14t8 15q3 8 3 17 0 14-10 24t-24 10Zm0 240q-14 0-24-10t-10-24q0-9 3-17t8-15q5-7 11-14l12-14 12 14q6 7 11 14t8 15q3 8 3 17 0 14-10 24t-24 10ZM368-172q-62 0-105-43t-43-105q0-40 21-75t59-57v-268q0-29 19.5-48.5T368-788q29 0 48.5 19.5T436-720v268q38 22 59 57t21 75q0 62-43 105t-105 43ZM248-320h240q0-30-17-58.5T422-430l-14-10v-280q0-17-11.5-28.5T368-760q-17 0-28.5 11.5T328-720v280l-14 10q-32 23-49 51.5T248-320Z"/>
    </Icon>
  );
});

IconMaterialDewPointW100Filled.displayName = 'OnesyIconMaterialDewPointW100Filled';

export default IconMaterialDewPointW100Filled;
