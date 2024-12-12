import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRawOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOffW100'

      short_name='RawOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-92 130-790l20-20 698 698-20 20Zm-98-284-38-141-28 107-60-60-31-114h29l40 147 38-147h24l38 147 40-147h29l-56 208h-25Zm-373 0 55-158 21 21-16 49h65l26 26h-99l-22 62h-30Zm-221 0v-208h168v126h-44l36 82h-30l-36-80h-66v80h-28Zm28-108h112v-72H164v72Z"/>
    </Icon>
  );
});

IconMaterialRawOffW100.displayName = 'OnesyIconMaterialRawOffW100';

export default IconMaterialRawOffW100;
