import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterOrp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrp'

      short_name='WaterOrp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-408q0-64 29-127.5T182-657q44-58 95.5-109t95.5-90q6-5 12.5-7.5T400-866q8 0 14.5 2.5T427-856q45 40 96 90.5T618-657q38 50 65 103t35 114q2 17-9.5 28.5T680-400q-17 0-28.5-11.5T637-440q-6-36-21.5-68.5T579-573q-30-46-74.5-96.5T400-774Q281-665 220.5-573T160-408q0 28 5 54t15 49v28q0 18-7 29t-17 14q-10 3-20 .5T119-247q-19-35-29-75.5T80-408Zm320-131ZM300-80q-17 0-28.5-11.5T260-120v-160q0-17 11.5-28.5T300-320h100q17 0 28.5 11.5T440-280v160q0 17-11.5 28.5T400-80H300Zm20-60h60v-120h-60v120Zm220-20v50q0 13-8.5 21.5T510-80q-13 0-21.5-8.5T480-110v-180q0-13 8.5-21.5T510-320h110q25 0 42.5 17.5T680-260v40q0 18-10 33t-26 23l20 46q6 14-2.5 26T638-80q-8 0-15-4.5T613-97l-27-63h-46Zm240 0v50q0 13-8.5 21.5T750-80q-13 0-21.5-8.5T720-110v-180q0-13 8.5-21.5T750-320h110q25 0 42.5 17.5T920-260v40q0 25-17.5 42.5T860-160h-80Zm-240-60h80v-40h-80v40Zm240 0h80v-40h-80v40Z"/>
    </Icon>
  );
});

IconMaterialWaterOrp.displayName = 'OnesyIconMaterialWaterOrp';

export default IconMaterialWaterOrp;
