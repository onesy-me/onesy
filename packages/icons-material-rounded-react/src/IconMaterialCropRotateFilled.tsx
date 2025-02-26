import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropRotateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateFilled'

      short_name='CropRotate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480 0Q304 0 171.5-110.5T7-389q-3-17 6.5-31T40-436q17-2 30 8.5T86-400q26 131 124.5 219T444-82l-34-34q-11-11-11-28t11-28q11-11 28-11t28 11L598-40q7 7 4.5 16T591-13q-27 7-54.5 10T480 0ZM360-280q-33 0-56.5-23.5T280-360v-240h-40q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680h40v-40q0-17 11.5-28.5T320-760q17 0 28.5 11.5T360-720v360h360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280h-40v40q0 17-11.5 28.5T640-200q-17 0-28.5-11.5T600-240v-40H360Zm240-160v-160H440v-80h160q33 0 56.5 23.5T680-600v160h-80ZM480-960q176 0 308.5 110T953-571q3 17-6.5 31T920-524q-17 2-30-8.5T874-560q-26-131-124.5-219T516-878l34 34q11 11 11 28t-11 28q-11 11-28 11t-28-11L362-920q-7-7-4.5-16t11.5-11q27-7 54.5-10t56.5-3Z"/>
    </Icon>
  );
});

IconMaterialCropRotateFilled.displayName = 'OnesyIconMaterialCropRotateFilled';

export default IconMaterialCropRotateFilled;
