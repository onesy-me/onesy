import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWork'

      short_name='AddHomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-200h240v200-200H200v200Zm480-360ZM320-702q12 0 23.5 3.5T366-687l196 140q15 11 16.5 29T567-487q-11 11-25.5 12t-26.5-7L320-622 120-480v280h80v-120q0-33 23.5-56.5T280-400h80q33 0 56.5 23.5T440-320v160q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160v-160h-80v120q0 33-23.5 56.5T200-120h-80q-33 0-56.5-23.5T40-200v-279q0-20 9-37t25-28l200-143q11-8 22.5-11.5T320-702Zm520-138q33 0 56.5 23.5T920-760v227q0 17-11.5 28.5T880-493q-17 0-28.5-11.5T840-533v-227H480v20q0 17-11.5 28.5T440-700q-17 0-28.5-11.5T400-740v-22q0-32 23-55t55-23h362ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-180v80q0 8 6 14t14 6q8 0 14-6t6-14v-80h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h80Zm0-380h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWork.displayName = 'OnesyIconMaterialAddHomeWork';

export default IconMaterialAddHomeWork;
