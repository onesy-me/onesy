import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100Filled'

      short_name='Label'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-445 654-290q-13 18-32.5 28T580-252H232q-25 0-42.5-17.5T172-312v-336q0-25 17.5-42.5T232-708h348q23 0 42 11t32 29l109 153q11 16 11 35t-11 35Z"/>
    </Icon>
  );
});

IconMaterialLabelW100Filled.displayName = 'OnesyIconMaterialLabelW100Filled';

export default IconMaterialLabelW100Filled;
