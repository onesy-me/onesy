import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRamenDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDining'

      short_name='RamenDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z"/>
    </Icon>
  );
});

IconMaterialRamenDining.displayName = 'OnesyIconMaterialRamenDining';

export default IconMaterialRamenDining;
