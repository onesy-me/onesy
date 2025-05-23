import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychiatryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryW100Filled'

      short_name='Psychiatry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-146q-5.96 0-9.96-4.02-4-4.03-4-9.98v-301q-54 0-103-20t-87-58q-38-38-57.5-87T199-729q0-12.33 8.34-20.66Q215.68-758 228-758q52.21 0 101.1 20.5Q378-717 416-679q32 32 51.5 73.5T492-518q10-20 22.5-37.5T543-589q37.67-37.82 87.05-58.41Q679.43-668 733-668q12.33 0 20.66 8.34Q762-651.33 762-639q0 53.57-20.59 102.95T683-449q-38 38-86.5 57.5T494-372v212q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryW100Filled.displayName = 'OnesyIconMaterialPsychiatryW100Filled';

export default IconMaterialPsychiatryW100Filled;
