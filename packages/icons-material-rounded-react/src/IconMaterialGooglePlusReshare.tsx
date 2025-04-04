import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGooglePlusReshare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GooglePlusReshare'

      short_name='GooglePlusReshare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18v-3q0-2.075 1.463-3.538Q5.925 10 8 10h9.2l-2.925-2.925Q14 6.8 14 6.4t.3-.7q.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.625 4.625Q15.4 16.6 15 16.6t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.9-2.9H8q-1.25 0-2.125.875T5 15v3q0 .425-.287.712Q4.425 19 4 19Z"/>
    </Icon>
  );
});

IconMaterialGooglePlusReshare.displayName = 'OnesyIconMaterialGooglePlusReshare';

export default IconMaterialGooglePlusReshare;
