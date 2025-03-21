import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadiologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadiologyW100Filled'

      short_name='Radiology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-92h32v92h276v-92h28v92h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm160-28h28v-93q0-6-7-19l-80-94q-9-11-12-24.5t2-26.5q9 7 19.5 10.5T365-403q14 0 28-5.5t24-16.5q12-13 29-19.5t34-6.5q18 0 34.5 6.5T543-425q11 11 24.5 16.5T595-403q12 0 22.5-3.5T637-417q5 13 2 26.5T627-366l-80 94q-3 5-5 9.5t-2 9.5v93h28v-93l80-95q8-9 14-22t6-30q0-11-2.5-21t-7.5-19q5-8 7.5-18t2.5-21q0-14-5-27.5T648-531l-80-95v-94h-28v93q0 5 1.5 10t5.5 9l80 95q6 8 9.5 16.5T640-479q0 19-12.5 33.5T595-431q-8 0-16.5-3T563-444q-17-17-38.5-26t-44.5-9q-23 0-44.5 9T397-444q-7 7-14.5 10t-16.5 3q-20 0-33-14.5T320-480q0-9 3-17.5t10-16.5l80-94q3-5 5-9.5t2-9.5v-93h-28v93l-80 95q-8 9-14 22t-6 30q0 11 2.5 21t7.5 19q-5 9-7.5 19t-2.5 21q0 17 6 30t14 22l80 95v93Z"/>
    </Icon>
  );
});

IconMaterialRadiologyW100Filled.displayName = 'OnesyIconMaterialRadiologyW100Filled';

export default IconMaterialRadiologyW100Filled;
