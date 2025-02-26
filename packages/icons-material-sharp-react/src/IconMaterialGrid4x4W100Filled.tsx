import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid4x4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4W100Filled'

      short_name='Grid4x4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-158v-120H158v-28h120v-160H158v-28h120v-160H158v-28h120v-120h28v120h160v-120h28v120h160v-120h28v120h120v28H682v160h120v28H682v160h120v28H682v120h-28v-120H494v120h-28v-120H306v120h-28Zm28-148h160v-160H306v160Zm188 0h160v-160H494v160ZM306-494h160v-160H306v160Zm188 0h160v-160H494v160Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4W100Filled.displayName = 'OnesyIconMaterialGrid4x4W100Filled';

export default IconMaterialGrid4x4W100Filled;
