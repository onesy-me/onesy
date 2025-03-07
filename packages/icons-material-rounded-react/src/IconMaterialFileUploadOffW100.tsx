import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileUploadOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadOffW100'

      short_name='FileUploadOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-694v116l-28-28v-88l-53 53-20-20 66-66q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-614q-5 5-10 5t-10-5l-80-80Zm-28 200 28 28v110q0 6-4 10t-10 4q-6 0-10-4t-4-10v-138Zm242 282H272q-26 0-43-17t-17-43v-76q0-6 4-10t10-4q6 0 10 4t4 10v76q0 12 10 22t22 10h408L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5l-76-76Zm40-114-27-27q2-5 5-7t8-2q6 0 10 4t4 10v22Z"/>
    </Icon>
  );
});

IconMaterialFileUploadOffW100.displayName = 'OnesyIconMaterialFileUploadOffW100';

export default IconMaterialFileUploadOffW100;
