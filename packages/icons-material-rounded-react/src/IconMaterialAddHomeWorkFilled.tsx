import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkFilled'

      short_name='AddHomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M710-600h20q13 0 21.5-8.5T760-630v-20q0-13-8.5-21.5T730-680h-20q-13 0-21.5 8.5T680-650v20q0 13 8.5 21.5T710-600Zm10 560q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-180v80q0 8 6 14t14 6q8 0 14-6t6-14v-80h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h80ZM320-697q12 0 23.5 3.5T366-682l212 151q8 5 11.5 13t3.5 16q0 8-4 14.5T577-476q-63 37-100 102.5T440-235q0 35 7 54t7 42q0 11-7.5 17.5T428-115q-13 0-20.5-10t-7.5-24v-146q0-25-17.5-42.5T340-355h-40q-25 0-42.5 17.5T240-295v100q0 33-23.5 56.5T160-115h-40q-33 0-56.5-23.5T40-195v-279q0-20 9-37t25-28l200-143q11-8 22.5-11.5T320-697Zm520-143q33 0 56.5 23.5T920-760v265q0 17-16 24.5t-31-3.5q-24-17-52-27.5T764-517q-17-2-32.5-3t-32.5 1q-8 1-13.5-6t-5.5-15q0-10-4.5-18T663-572L438-734q-13-10-21-24t-8-28q0-25 16-39.5t43-14.5h372Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkFilled.displayName = 'OnesyIconMaterialAddHomeWorkFilled';

export default IconMaterialAddHomeWorkFilled;
