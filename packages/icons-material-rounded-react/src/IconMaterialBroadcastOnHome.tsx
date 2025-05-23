import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBroadcastOnHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnHome'

      short_name='BroadcastOnHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-800q-17 0-28.5-11.5T160-840q0-17 11.5-28.5T200-880h600q33 0 56.5 23.5T880-800v81q0 20-12.5 29.5T840-680q-15 0-27.5-9.5T800-719v-81H200Zm-80 560q-17 0-28.5-11.5T80-280v-360q0-17 11.5-28.5T120-680h200q17 0 28.5 11.5T360-640v360q0 17-11.5 28.5T320-240H120Zm530 50v-170q-9-8-14.5-18.5T630-400q0-21 15-35.5t35-14.5q21 0 35.5 14.5T730-400q0 11-4.5 22T710-360v170q0 13-8.5 21.5T680-160q-13 0-21.5-8.5T650-190Zm30-310q-42 0-71 29t-29 71q0 12 3.5 24t9.5 23q6 11 5.5 23.5T589-308q-9 9-21.5 8.5T548-310q-14-20-21-43t-7-47q0-67 47-113.5T680-560q67 0 113.5 46.5T840-400q0 23-6.5 46T813-311q-7 10-19 10.5t-21-8.5q-9-8-10-20.5t5-23.5q6-11 9-23t3-24q0-42-29-71t-71-29Zm0-100q-83 0-141.5 58T480-400q0 32 10.5 62t29.5 56q8 11 7 23.5T517-237q-9 9-21 8t-20-11q-26-35-41-75.5T420-400q0-109 76-184.5T680-660q109 0 184.5 75.5T940-400q0 44-14 84.5T885-240q-8 10-20.5 10t-21.5-9q-9-9-9-21t8-23q19-26 28.5-55.5T880-400q0-84-58-142t-142-58ZM160-320h120v-280H160v280Zm0 0h120-120Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnHome.displayName = 'OnesyIconMaterialBroadcastOnHome';

export default IconMaterialBroadcastOnHome;
