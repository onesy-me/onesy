import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWysiwyg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wysiwyg'

      short_name='Wysiwyg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-480H200v480Zm80-280v-80h400v80H280Zm0 160v-80h240v80H280Z"/>
    </Icon>
  );
});

IconMaterialWysiwyg.displayName = 'OnesyIconMaterialWysiwyg';

export default IconMaterialWysiwyg;
