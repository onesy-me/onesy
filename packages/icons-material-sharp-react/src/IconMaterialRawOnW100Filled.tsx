import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRawOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnW100Filled'

      short_name='RawOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M136-376v-208h168v126h-44l36 82h-30l-36-80h-66v80h-28Zm221 0 72-208h40l72 208h-30l-22-62h-80l-22 62h-30Zm272 0-56-208h29l40 147 38-147h24l38 147 40-147h29l-56 208h-25l-38-141-38 141h-25Zm-212-88h64l-28-82h-8l-28 82Zm-253-20h112v-72H164v72Z"/>
    </Icon>
  );
});

IconMaterialRawOnW100Filled.displayName = 'OnesyIconMaterialRawOnW100Filled';

export default IconMaterialRawOnW100Filled;
