import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScore'

      short_name='CreditScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-640h640v-80H160v80Zm-80-80q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480H160v240h124q17 0 28.5 11.5T324-200q0 17-11.5 28.5T284-160H160q-33 0-56.5-23.5T80-240v-480Zm80 0v480-130.5 63.5-413ZM598-96q-8 0-15-3t-13-9L456-222q-11-11-11.5-27.5T456-278q11-11 27.5-11t28.5 11l86 84 197-197q12-12 28.5-11.5T852-390q11 12 11.5 28T852-334L626-108q-6 6-13 9t-15 3Z"/>
    </Icon>
  );
});

IconMaterialCreditScore.displayName = 'OnesyIconMaterialCreditScore';

export default IconMaterialCreditScore;
