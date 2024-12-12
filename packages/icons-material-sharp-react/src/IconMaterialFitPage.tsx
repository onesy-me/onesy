import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPage'

      short_name='FitPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialFitPage.displayName = 'OnesyIconMaterialFitPage';

export default IconMaterialFitPage;
