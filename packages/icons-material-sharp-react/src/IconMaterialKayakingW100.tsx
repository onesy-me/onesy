import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKayakingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KayakingW100'

      short_name='Kayaking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-66v-28h14q32 0 61.5-10t58.5-27q29 17 58.5 27T360-94q32 0 62-10t58-27q29 17 58.5 27T600-94q32 0 62-10t58-27q28 17 58 27t62 10h14v28h-14q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8h-14Zm254-128q-30 0-62-10t-58-36l-11 11q-5 5-13 10-37-7-74.5-17.5T71-260q48-17 109.5-33.5T305-320l64-192q7-19 25.5-27.5t36.5.5l114 58 121-70 73-163-20-53 39-87 99 44-39 87-53 20-167 375q84 9 158 28.5T889-260q-40 14-77 24.5T743-219q-7-5-12.5-10T720-240q-27 26-58.5 36T600-194q-30 0-61.5-10.5T480-241q-27 26-58.5 36.5T360-194Zm208-136 80-180-103 61-85-44-56 164q16-2 36-3.5t40-1.5q19 0 42 1t46 3Zm-88-266q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialKayakingW100.displayName = 'OnesyIconMaterialKayakingW100';

export default IconMaterialKayakingW100;
