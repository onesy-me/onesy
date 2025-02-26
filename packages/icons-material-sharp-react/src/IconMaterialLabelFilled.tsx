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
      <path d="M840-480 642-200H120v-560h522l198 280Z"/>
    </Icon>
  );
});

IconMaterialLabelFilled.displayName = 'OnesyIconMaterialLabelFilled';

export default IconMaterialLabelFilled;
