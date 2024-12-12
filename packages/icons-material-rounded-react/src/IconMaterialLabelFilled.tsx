import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelFilled'

      short_name='Label'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M807-434 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l141 200q15 21 15 46t-15 46Z"/>
    </Icon>
  );
});

IconMaterialLabelFilled.displayName = 'OnesyIconMaterialLabelFilled';

export default IconMaterialLabelFilled;
