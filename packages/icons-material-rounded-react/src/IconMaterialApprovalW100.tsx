import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalW100'

      short_name='Approval'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-212q-24.75 0-42.37-17.63Q212-247.25 212-272v-100q0-26 17-43t43-17h416q26 0 43 17t17 43v100q0 24.75-17.62 42.37Q712.75-212 688-212H272Zm0-108h416q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8v-20q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v20q0 13.6 9.2 22.8 9.2 9.2 22.8 9.2Zm184-144L347-610q-7-10-10.5-21.21Q333-642.43 335-654q8.2-58.57 45.1-96.29Q417-788 480-788q63 0 99.9 37.71Q616.8-712.57 625-654q2 11.57-1.5 22.79Q620-620 613-610L503.85-463.99Q495-452 479.83-452q-15.16 0-23.83-12Zm24-15 120-161q0-50-35-85t-85-35q-50 0-85 35t-35 85l120 161Zm0-141Z"/>
    </Icon>
  );
});

IconMaterialApprovalW100.displayName = 'OnesyIconMaterialApprovalW100';

export default IconMaterialApprovalW100;
