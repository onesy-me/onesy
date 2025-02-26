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
      <path d="M788-480 627-252H172v-456h453l163 228Zm-34 0L611-680H200v400h411l143-200Zm-554 0v200-400 200Z"/>
    </Icon>
  );
});

IconMaterialLabelW100.displayName = 'OnesyIconMaterialLabelW100';

export default IconMaterialLabelW100;
