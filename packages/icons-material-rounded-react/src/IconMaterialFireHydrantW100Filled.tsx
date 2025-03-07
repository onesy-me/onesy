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
      <path d="M292-160v-167h-62q-11 0-19.5-8.5T202-355v-90q0-11 8.5-19.5T230-473h62v-167h-62q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h64q11-69 63-114.5T480-828q71 0 123 45.5T666-668h64q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-62v167h62q11 0 19.5 8.5T758-445v90q0 11-8.5 19.5T730-327h-62v167h62q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H230q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h62Zm187.96-124Q528-284 562-317.96q34-33.96 34-82T562.04-482q-33.96-34-82-34T398-482.04q-34 33.96-34 82T397.96-318q33.96 34 82 34Zm-.2-28q-36.76 0-62.26-25.74-25.5-25.73-25.5-62.5 0-36.76 25.74-62.26 25.73-25.5 62.5-25.5 36.76 0 62.26 25.74 25.5 25.73 25.5 62.5 0 36.76-25.74 62.26-25.73 25.5-62.5 25.5Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantW100Filled.displayName = 'OnesyIconMaterialFireHydrantW100Filled';

export default IconMaterialFireHydrantW100Filled;
