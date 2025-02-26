import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelImportant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportant'

      short_name='LabelImportant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m120-200 180-280-180-280h522l198 280-198 280H120Zm146-80h334l142-200-142-200H266l130 200-130 200Zm130-200L266-680l130 200-130 200 130-200Z"/>
    </Icon>
  );
});

IconMaterialLabelImportant.displayName = 'OnesyIconMaterialLabelImportant';

export default IconMaterialLabelImportant;
