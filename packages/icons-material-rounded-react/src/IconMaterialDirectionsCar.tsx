import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsCar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCar'

      short_name='DirectionsCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v20q0 25-17.5 42.5T180-120q-25 0-42.5-17.5T120-180v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h410q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780-120q-25 0-42.5-17.5T720-180v-20H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCar.displayName = 'OnesyIconMaterialDirectionsCar';

export default IconMaterialDirectionsCar;
