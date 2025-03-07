import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireHydrantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantW100Filled'

      short_name='FireHydrant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-132v-28h76v-167h-90v-146h90v-167h-76v-28h78q11-69 63-114.5T480-828q71 0 123 45.5T666-668h78v28h-76v167h90v146h-90v167h76v28H216Zm263.96-152Q528-284 562-317.96q34-33.96 34-82T562.04-482q-33.96-34-82-34T398-482.04q-34 33.96-34 82T397.96-318q33.96 34 82 34Zm-.2-28q-36.76 0-62.26-25.74-25.5-25.73-25.5-62.5 0-36.76 25.74-62.26 25.73-25.5 62.5-25.5 36.76 0 62.26 25.74 25.5 25.73 25.5 62.5 0 36.76-25.74 62.26-25.73 25.5-62.5 25.5Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantW100Filled.displayName = 'OnesyIconMaterialFireHydrantW100Filled';

export default IconMaterialFireHydrantW100Filled;
