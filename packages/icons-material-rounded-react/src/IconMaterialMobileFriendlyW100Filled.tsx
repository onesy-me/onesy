import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileFriendlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyW100Filled'

      short_name='MobileFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m598-396 218-218q4-4 9.5-4.5T836-614q5 5 5 10t-5 10L619-377q-9 9-21 9t-21-9L474-480q-4-4-4.5-9.5T474-500q5-5 10-5t10 5l104 104ZM272-92q-24.75 0-42.37-17.63Q212-127.25 212-152v-656q0-24.75 17.63-42.38Q247.25-868 272-868h336q24.75 0 42.38 17.62Q668-832.75 668-808v110q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-48H240v532h400v-48q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v110q0 24.75-17.62 42.37Q632.75-92 608-92H272Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyW100Filled.displayName = 'OnesyIconMaterialMobileFriendlyW100Filled';

export default IconMaterialMobileFriendlyW100Filled;
