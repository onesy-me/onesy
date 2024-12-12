import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptW100'

      short_name='Receipt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-158v-644q0-5 4-6.5t8 .5l28 19q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l36-22q4-2 8-2t8 2l36 22q4 2 8 2t8-2l28-19q4-2 8-.5t4 6.5v644q0 5-4 6.5t-8-.5l-28-19q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-36 22q-4 2-8 2t-8-2l-36-22q-4-2-8-2t-8 2l-28 19q-4 2-8 .5t-4-6.5Zm108-180h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-128h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-128h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-80 398h560v-568H200v568Zm0-568v568-568Z"/>
    </Icon>
  );
});

IconMaterialReceiptW100.displayName = 'OnesyIconMaterialReceiptW100';

export default IconMaterialReceiptW100;
