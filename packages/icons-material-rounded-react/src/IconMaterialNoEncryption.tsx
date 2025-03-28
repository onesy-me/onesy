import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoEncryption = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryption'

      short_name='NoEncryption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-640v-80q0-50-34.5-85T481-840q-35 0-63 16.5T379-779q-7 17-22.5 23.5t-31.5.5q-17-6-24-21.5t-1-31.5q20-51 69-81.5T481-920q83 0 141 58.5T680-720v80h40q33 0 56.5 23.5T800-560v200q0 20-12.5 30T760-320q-15 0-27.5-10.5T720-361v-199H520q-20 0-30-12.5T480-600q0-15 10-27.5t30-12.5h80ZM240-80q-33 0-56.5-23.5T160-160v-400q0-25 14.5-46t37.5-30L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-34-34q-11 5-20 7.5T720-80H240Zm446-80L539-309q-11 11-25.5 17t-31.5 6q-33 0-56.5-23.5T402-366q0-17 6-31.5t17-25.5L286-560h-46v400h446ZM486-360Zm131-97Z"/>
    </Icon>
  );
});

IconMaterialNoEncryption.displayName = 'OnesyIconMaterialNoEncryption';

export default IconMaterialNoEncryption;
