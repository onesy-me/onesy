import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaW100'

      short_name='Bia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h106v-94h28v94h132v-94h28v94h132v-94h28v94h186v-335q-28 26-74.73 37.5Q678.54-526 629-526q-32 0-64-4.5T506-546H160v306Zm120-334h179q-14-13-21.5-29t-7.5-37q0-11 2.25-21t6.75-19H280v106Zm349.01 20q61.99 0 116.49-16.5Q800-587 800-640t-54.51-69.5Q690.98-726 628.99-726T512.5-709.5Q458-693 458-640t54.51 69.5q54.51 16.5 116.5 16.5ZM132-212v-362h120v-134h209q29-25 74.63-35.5Q581.25-754 629-754q73 0 136 25.5t63 88.5v428H132Zm28-28h640-640Z"/>
    </Icon>
  );
});

IconMaterialBiaW100.displayName = 'OnesyIconMaterialBiaW100';

export default IconMaterialBiaW100;
