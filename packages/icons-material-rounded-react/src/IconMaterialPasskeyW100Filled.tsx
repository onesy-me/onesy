import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPasskeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyW100Filled'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-212q-13 0-21.5-8.5T172-242v-22q0-22 13.5-41.5T222-336q55-26 109.5-39T440-388q19 0 37.5 2t37.5 5q8 2 12.5 6.5T533-362q5 35 22.5 67t45.5 55q0 11-8.5 19.5T573-212H202Zm238-280q-45 0-76.5-31.5T332-600q0-45 31.5-76.5T440-708q45 0 76.5 31.5T548-600q0 45-31.5 76.5T440-492Zm290 115q11 0 19.5-9t8.5-20q0-11-8.5-19.5T730-434q-11 0-20 8.5t-9 19.5q0 11 9 20t20 9Zm3 243-27-28q-1-1-5-10v-125q-31-9-50.5-35T631-391q0-41 29-70t70-29q41 0 69.5 29t28.5 70q0 32-17.5 56T765-300l24 24q5 5 5 11t-5 11l-21 21q-5 5-5 10.5t5 10.5l22 21q5 5 5 10.5t-5 10.5l-36 36q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialPasskeyW100Filled.displayName = 'OnesyIconMaterialPasskeyW100Filled';

export default IconMaterialPasskeyW100Filled;
