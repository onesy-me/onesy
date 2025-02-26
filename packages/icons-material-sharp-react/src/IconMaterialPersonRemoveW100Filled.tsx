import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveW100Filled'

      short_name='PersonRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M646-546v-28h188v28H646Zm-286 34q-44.55 0-76.27-31.72Q252-575.45 252-620t31.73-76.28Q315.45-728 360-728t76.27 31.72Q468-664.55 468-620t-31.73 76.28Q404.55-512 360-512ZM92-232v-52q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v52H92Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveW100Filled.displayName = 'OnesyIconMaterialPersonRemoveW100Filled';

export default IconMaterialPersonRemoveW100Filled;
