import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudLeftW100Filled'

      short_name='EarbudLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M341-132q-26 0-43-17t-17-43v-305h-49q-26 0-43-17t-17-43v-131q0-26 17-43t43-17h197q11 0 19.5 8.5T457-720v528q0 26-17 43t-43 17h-56Zm447-491q0 83-53 144.5T602-417q-11 0-18.5-7.5T576-443v-359q0-11 7.5-18.5T602-828q80 0 133 61t53 144Z"/>
    </Icon>
  );
});

IconMaterialEarbudLeftW100Filled.displayName = 'OnesyIconMaterialEarbudLeftW100Filled';

export default IconMaterialEarbudLeftW100Filled;
