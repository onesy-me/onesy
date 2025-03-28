import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2'

      short_name='Spo2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-17 0-28.5-11.5T440-200v-160q0-17 11.5-28.5T480-400h100q17 0 28.5 11.5T620-360v160q0 17-11.5 28.5T580-160H480Zm20-60h60v-120h-60v120ZM830-80H720q-17 0-28.5-11.5T680-120v-70q0-17 11.5-28.5T720-230h80v-30h-90q-13 0-21.5-8.5T680-290q0-13 8.5-21.5T710-320h110q17 0 28.5 11.5T860-280v70q0 17-11.5 28.5T820-170h-80v30h90q13 0 21.5 8.5T860-110q0 13-8.5 21.5T830-80ZM400-866q8 0 14.5 2.5T427-856q36 32 73.5 68t72 75.5q34.5 39.5 64 82T687-543q7 15 .5 30T665-493q-16 5-30.5-2T612-517q-17-36-41.5-70.5t-53-67.5Q489-688 459-718t-59-56Q281-665 220.5-573T160-408q0 81 43 147t122 90q17 5 27 19.5t4 30.5q-7 17-24.5 24T295-96q-101-32-158-120.5T80-408q0-65 29-128.5t73-121Q226-715 277.5-766t95.5-90q6-5 12.5-7.5T400-866Zm-6 458Z"/>
    </Icon>
  );
});

IconMaterialSpo2.displayName = 'OnesyIconMaterialSpo2';

export default IconMaterialSpo2;
