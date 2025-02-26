import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelImportantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantFilled'

      short_name='LabelImportant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m120-200 180-280-180-280h522l198 280-198 280H120Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantFilled.displayName = 'OnesyIconMaterialLabelImportantFilled';

export default IconMaterialLabelImportantFilled;
