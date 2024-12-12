import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabUnselectedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedW100'

      short_name='TabUnselected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-68h28v40h40v28h-68Zm0-148v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-68h108v28h-80v40h-28Zm148 468v-28h80v28h-80Zm40-508v-28h80v28h-80Zm120 508v-28h80v28h-80Zm40-348v-188h348v188H480Zm120 348v-28h80v28h-80Zm160 0v-28h40v-80h28v108h-68Zm40-188v-80h28v80h-28Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedW100.displayName = 'OnesyIconMaterialTabUnselectedW100';

export default IconMaterialTabUnselectedW100;
