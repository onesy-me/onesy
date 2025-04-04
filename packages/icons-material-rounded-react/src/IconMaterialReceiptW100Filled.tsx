import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptW100Filled'

      short_name='Receipt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-630q0-5 4-6.5t8 .5l28 19q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l28-19q4-2 8-.5t4 6.5v630q0 9-7.5 13t-15.5-1l-17-11q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-17 11q-8 5-15.5 1t-7.5-13Zm108-166h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-128h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-128h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialReceiptW100Filled.displayName = 'OnesyIconMaterialReceiptW100Filled';

export default IconMaterialReceiptW100Filled;
