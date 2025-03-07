import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewQuiltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltFilled'

      short_name='ViewQuilt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-500q-33 0-56.5-23.5T373-580v-100q0-33 23.5-56.5T453-760h307q33 0 56.5 23.5T840-680v100q0 33-23.5 56.5T760-500H453Zm254 300q-33 0-56.5-23.5T627-280v-100q0-33 23.5-56.5T707-460h53q33 0 56.5 23.5T840-380v100q0 33-23.5 56.5T760-200h-53Zm-254 0q-33 0-56.5-23.5T373-280v-100q0-33 23.5-56.5T453-460h54q33 0 56.5 23.5T587-380v100q0 33-23.5 56.5T507-200h-54Zm-253 0q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h53q33 0 56.5 23.5T333-680v400q0 33-23.5 56.5T253-200h-53Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltFilled.displayName = 'OnesyIconMaterialViewQuiltFilled';

export default IconMaterialViewQuiltFilled;
