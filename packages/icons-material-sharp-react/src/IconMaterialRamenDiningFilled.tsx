import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRamenDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningFilled'

      short_name='RamenDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningFilled.displayName = 'OnesyIconMaterialRamenDiningFilled';

export default IconMaterialRamenDiningFilled;
