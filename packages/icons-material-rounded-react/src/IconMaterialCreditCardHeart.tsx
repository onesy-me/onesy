import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeart'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-320 13-173 480Zm556 83q-8 0-15-2.5t-13-8.5L576-280q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5T880-337q0 15-6 30t-18 27L744-168q-6 6-13 8.5t-15 2.5ZM160-640h640v-80H160v80Zm0 480q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v158q0 18-15.5 26.5t-32.5.5q-26-12-55.5-18.5T716-560q-57 0-107.5 21.5T520-480H160v240h263q17 0 28.5 11.5T463-200q0 17-11.5 28.5T423-160H160Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeart.displayName = 'OnesyIconMaterialCreditCardHeart';

export default IconMaterialCreditCardHeart;
