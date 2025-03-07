import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarCrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarCrash'

      short_name='CarCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-200 200ZM80-426q0-7 1-14t3-13l80-227q6-18 21.5-29t34.5-11h139q17 0 28.5 11.5T399-680q0 17-11.5 28.5T359-640H234l-42 120h288q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440H160v200h560v-121q0-17 11.5-28.5T760-401q17 0 28.5 11.5T800-361v221q0 25-17.5 42.5T740-80q-25 0-42.5-17.5T680-140v-20H200v20q0 25-17.5 42.5T140-80q-25 0-42.5-17.5T80-140v-286Zm540 146q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm-360 0q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm420-200q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialCarCrash.displayName = 'OnesyIconMaterialCarCrash';

export default IconMaterialCarCrash;
