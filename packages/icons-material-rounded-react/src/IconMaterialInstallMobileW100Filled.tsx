import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileW100Filled'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h222q13 0 21.5 8.5T564-838v62q0 13-8.5 21.5T534-746H280v532h400v-66q0-6 4-10t10-4q6 0 10 4t4 10v128q0 26-17 43t-43 17H312Zm394-399v-309q0-6 4-10t10-4q6 0 10 4t4 10v309l120-120q4-4 9.5-4.5T874-611q5 5 5 10t-5 10L741-458q-9 9-21 9t-21-9L566-591q-4-4-4.5-9.5T566-611q5-5 10-5t10 5l120 120Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100Filled.displayName = 'OnesyIconMaterialInstallMobileW100Filled';

export default IconMaterialInstallMobileW100Filled;
