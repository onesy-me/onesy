import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropRotateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateW100Filled'

      short_name='CropRotate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-52q-161 0-282-103.5T55-417q-2-8 1-14.5t10-7.5q7-1 11 4.5t5 12.5q22 148 135 245t265 97l-72-72q-4-4-4.5-9.5T410-172q5-5 10-5t10 5L537-65q3 3 1.5 6.5T533-54q-13 2-25.5 2H482Zm-90-280q-25 0-42.5-17.5T332-392v-208h-66q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-66q0-6 4-10t10-4q6 0 10 4t4 10v302q0 12 10 22t22 10h354q6 0 10 4t4 10q0 6-4 10t-10 4H628v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-66H392Zm208-56v-180q0-12-10-22t-22-10H388v-28h180q25 0 42.5 17.5T628-568v180h-28ZM478-908q161 0 282 104t145 262q2 8-1 14t-10 7q-7 1-11-4.5t-5-12.5q-22-148-135-245t-265-97l72 72q4 4 4.5 9.5T550-788q-5 5-10 5t-10-5L423-895q-3-3-1.5-6.5t5.5-4.5q13-2 25.5-2H478Z"/>
    </Icon>
  );
});

IconMaterialCropRotateW100Filled.displayName = 'OnesyIconMaterialCropRotateW100Filled';

export default IconMaterialCropRotateW100Filled;
