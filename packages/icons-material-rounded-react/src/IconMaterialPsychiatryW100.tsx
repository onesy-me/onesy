import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychiatryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryW100'

      short_name='Psychiatry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-146q-5.96 0-9.96-4.02-4-4.03-4-9.98v-301q-54 0-103-20t-87-58q-38-38-57.5-87T199-729q0-12.33 8.34-20.66Q215.68-758 228-758q52.21 0 101.1 20.5Q378-717 416-679q32 32 51.5 73.5T492-518q10-20 22.5-37.5T543-589q37.67-37.82 87.05-58.41Q679.43-668 733-668q12.33 0 20.66 8.34Q762-651.33 762-639q0 53.57-20.59 102.95T683-449q-38 38-86.5 57.5T494-372v212q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM467-490q0-48-18.5-91.5T396-659q-34-34-77.5-52.5T227-730q0 48 18 92t52 78q34 34 78 52t92 18Zm27 90q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T564-569q-34 34-52 77.5T494-400Zm0 0Zm-27-90Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryW100.displayName = 'OnesyIconMaterialPsychiatryW100';

export default IconMaterialPsychiatryW100;
