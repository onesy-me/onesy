import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreW100'

      short_name='CreditScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-598h640v-90q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v90Zm-28-90q0-26 17-43t43-17h576q26 0 43 17t17 43v136q0 13-8.5 21.5T798-522H160v250q0 12 10 22t22 10h179q6 0 10 4t4 10q0 6-4 10t-10 4H192q-26 0-43-17t-17-43v-416Zm28 0v448-165 68-383 32Zm422 520q-5 0-10.5-2t-10.5-7L458-280q-4-4-4.5-9.5T458-300q5-5 10-5t10 5l104 104 218-218q4-4 9.5-4.5T820-414q5 5 5 10t-5 10L603-177q-5 5-10 7t-11 2Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreW100.displayName = 'OnesyIconMaterialCreditScoreW100';

export default IconMaterialCreditScoreW100;
