import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneticsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneticsW100Filled'

      short_name='Genetics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-100q0-140 56-215t151-165q-96-90-152-165t-56-215v-10q0-6 4-10t10-4q6 0 10 4t4 10v10q0 23 1.5 44t5.5 40h387q4-19 5.5-40t1.5-44v-10q0-6 4-10t10-4q6 0 10 4t4 10v10q0 140-56 215T501-480q95 89 151 164.5T708-100v10q0 6-4 10t-10 4q-6 0-10-4t-4-10v-10q0-23-1.5-44t-5.5-40H287q-4 19-5.5 40t-1.5 44v10q0 6-4 10t-10 4q-6 0-10-4t-4-10v-10Zm101-528h253q20-26 36-55.5t25-64.5H292q10 35 25 64t36 56Zm127 129q29-27 54.5-52t47.5-49H377q22 24 48 49t55 52ZM378-360h204q-22-24-47.5-49T480-461q-29 27-54.5 52T378-360Zm-85 148h374q-10-35-25-64t-36-56H354q-21 27-36.5 56T293-212Z"/>
    </Icon>
  );
});

IconMaterialGeneticsW100Filled.displayName = 'OnesyIconMaterialGeneticsW100Filled';

export default IconMaterialGeneticsW100Filled;
