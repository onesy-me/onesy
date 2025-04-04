import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100'

      short_name='Label'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-445 654-290q-13 18-32.5 28T580-252H232q-25 0-42.5-17.5T172-312v-336q0-25 17.5-42.5T232-708h348q23 0 42 11t32 29l109 153q11 16 11 35t-11 35ZM580-280q15 0 28.5-7.5T630-306l111-155q6-8 6-19t-6-19L630-654q-8-11-21.5-18.5T580-680H232q-12 0-22 10t-10 22v336q0 12 10 22t22 10h348ZM200-680v400-400Z"/>
    </Icon>
  );
});

IconMaterialLabelW100.displayName = 'OnesyIconMaterialLabelW100';

export default IconMaterialLabelW100;
