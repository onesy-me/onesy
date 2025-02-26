import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreW100Filled'

      short_name='CreditScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v144q0 9-6.5 15.5T806-522q-23 0-42 10.5T729-485L582-337l-33-34q-34-34-81-34t-81 34q-28 28-32.5 65.5T367-236q5 8 .5 16t-12.5 8H192Zm-32-386v76h640v-76H160Zm422 402 218-218q4-4 9.5-4.5T820-414q5 5 5 10t-5 10L603-177q-5 5-10 7t-11 2q-5 0-10.5-2t-10.5-7L458-280q-4-4-4.5-9.5T458-300q5-5 10-5t10 5l104 104Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreW100Filled.displayName = 'OnesyIconMaterialCreditScoreW100Filled';

export default IconMaterialCreditScoreW100Filled;
