import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTitleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleFilled'

      short_name='Title'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-160v-520H200v-120h560v120H540v520H420Z"/>
    </Icon>
  );
});

IconMaterialTitleFilled.displayName = 'OnesyIconMaterialTitleFilled';

export default IconMaterialTitleFilled;
