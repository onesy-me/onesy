import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnW100'

      short_name='FlashOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-336 170-247H511l63-217H380v320h100v144Zm-28 92v-208H352v-376h259l-63 217h155L452-244Zm28-236H380h100Z"/>
    </Icon>
  );
});

IconMaterialFlashOnW100.displayName = 'OnesyIconMaterialFlashOnW100';

export default IconMaterialFlashOnW100;
