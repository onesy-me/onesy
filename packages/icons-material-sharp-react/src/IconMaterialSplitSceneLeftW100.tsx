import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneLeftW100'

      short_name='SplitSceneLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M594-212v-28h206v-480H594v-28h234v536H594Zm-128 80v-80H132v-536h334v-80h28v696h-28Zm334-588v480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneLeftW100.displayName = 'OnesyIconMaterialSplitSceneLeftW100';

export default IconMaterialSplitSceneLeftW100;
