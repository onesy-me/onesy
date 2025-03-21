import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsW100'

      short_name='Contacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-124q-6 0-10-4t-4-10q0-6 4-10t10-4h560q6 0 10 4t4 10q0 6-4 10t-10 4H200Zm0-684q-6 0-10-4t-4-10q0-6 4-10t10-4h560q6 0 10 4t4 10q0 6-4 10t-10 4H200Zm280 420q39 0 66.5-27.5T574-482q0-39-27.5-66.5T480-576q-39 0-66.5 27.5T386-482q0 39 27.5 66.5T480-388ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm106-28q45-36 90-52t92-16q47 0 92 16t90 52h106q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h106Zm50 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-176q-27 0-46.5-19.5T414-482q0-27 19.5-46.5T480-548q27 0 46.5 19.5T546-482q0 27-19.5 46.5T480-416Zm0-64Z"/>
    </Icon>
  );
});

IconMaterialContactsW100.displayName = 'OnesyIconMaterialContactsW100';

export default IconMaterialContactsW100;
