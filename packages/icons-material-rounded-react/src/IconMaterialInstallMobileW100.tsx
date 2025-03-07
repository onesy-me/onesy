import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileW100'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h238q6 0 10 4t4 10q0 6-4 10t-10 4H312q-12 0-22 10t-10 22v34h270q6 0 10 4t4 10q0 6-4 10t-10 4H280v532h400v-66q0-6 4-10t10-4q6 0 10 4t4 10v128q0 26-17 43t-43 17H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm426-305v-309q0-6 4-10t10-4q6 0 10 4t4 10v309l120-120q4-4 9.5-4.5T874-611q5 5 5 10t-5 10L741-458q-9 9-21 9t-21-9L566-591q-4-4-4.5-9.5T566-611q5-5 10-5t10 5l120 120ZM280-774v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100.displayName = 'OnesyIconMaterialInstallMobileW100';

export default IconMaterialInstallMobileW100;
