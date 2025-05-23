import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadiologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadiologyW100'

      short_name='Radiology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-92h32v92h276v-92h28v92h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-60q0 12 10 22t22 10h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496Zm192 32v-93l-80-95q-8-9-14-22t-6-30q0-11 2.5-21t7.5-19q-5-9-7.5-19t-2.5-21q0-17 6-30t14-22l80-95v-93h28v93q0 5-7 19l-80 94q-7 8-10 16.5t-3 17.5q0 20 13 34.5t33 14.5q9 0 16.5-3t14.5-10q17-17 38.5-26t44.5-9q23 0 44.5 9t38.5 26q7 7 15 10t16 3q20 0 33-14.5t13-33.5q0-9-3.5-17.5T627-513l-80-95q-4-4-5.5-9t-1.5-10v-93h28v94l80 95q10 11 15 24.5t5 27.5q0 11-2.5 21t-7.5 18q5 9 7.5 19t2.5 21q0 17-6 30t-14 22l-80 95v93h-28v-93q0-6 7-19l80-94q9-11 12-24.5t-2-26.5q-9 7-19.5 10.5T595-403q-14 0-27.5-5.5T543-425q-12-13-28.5-19.5T480-451q-17 0-34 6.5T417-425q-10 11-24 16.5t-28 5.5q-12 0-22.5-3.5T323-417q-5 13-2 26.5t12 24.5l80 94q3 5 5 9.5t2 9.5v93h-28Zm-192-32v32-560 528Z"/>
    </Icon>
  );
});

IconMaterialRadiologyW100.displayName = 'OnesyIconMaterialRadiologyW100';

export default IconMaterialRadiologyW100;
