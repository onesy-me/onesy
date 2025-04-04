import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookOnlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnlineW100Filled'

      short_name='BookOnline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M383.62-352Q370-352 361-361.24q-9-9.25-9-22.91V-438q0-5 2.5-8t7.5-4q9.78-3.04 15.89-11.02Q384-469 384-480t-6.11-18.98Q371.78-506.96 362-510q-5-1-7.5-4t-2.5-8v-53.85q0-13.66 9.22-22.91 9.21-9.24 22.83-9.24h192.33q13.62 0 22.62 9.24 9 9.25 9 22.91V-522q0 5-2.5 8t-7.5 4q-9.78 3.04-15.89 11.02Q576-491 576-480t6.11 18.98q6.11 7.98 15.89 11.02 5 1 7.5 4t2.5 8v53.85q0 13.66-9.22 22.91-9.21 9.24-22.83 9.24H383.62ZM480-400q7 0 11.5-4.5T496-416q0-7-4.5-11.5T480-432q-7 0-11.5 4.5T464-416q0 7 4.5 11.5T480-400Zm0-64q7 0 11.5-4.5T496-480q0-7-4.5-11.5T480-496q-7 0-11.5 4.5T464-480q0 7 4.5 11.5T480-464Zm0-64q7 0 11.5-4.5T496-544q0-7-4.5-11.5T480-560q-7 0-11.5 4.5T464-544q0 7 4.5 11.5T480-528ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialBookOnlineW100Filled.displayName = 'OnesyIconMaterialBookOnlineW100Filled';

export default IconMaterialBookOnlineW100Filled;
