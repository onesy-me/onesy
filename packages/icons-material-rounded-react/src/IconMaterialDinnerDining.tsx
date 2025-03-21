import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDinnerDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDining'

      short_name='DinnerDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-120q-12 0-23.5-5T142-138l-28-28q-10-10-5-22t19-12h704q14 0 19 12t-5 22l-28 28q-8 8-19.5 13t-23.5 5H185Zm-65-120q6-18 16-34t24-30v-296h-10q-13 0-21.5-8.5T120-630q0-13 8.5-21.5T150-660h10v-30h-10q-13 0-21.5-8.5T120-720q0-13 8.5-21.5T150-750h10v-30h-10q-13 0-21.5-8.5T120-810q0-13 8.5-21.5T150-840h250q33 0 56.5 23.5T480-760v10h330q13 0 21.5 8.5T840-720q0 13-8.5 21.5T810-690H480v10q0 33-23.5 56.5T400-600h-80v244q14 2 28 6t26 12q26-65 83-103.5T583-480q90 0 153.5 61.5T800-268v28H120Zm334-80h252q-17-36-50-58t-73-22q-42 0-77 21t-52 59ZM320-750h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-100-90h40v-30h-40v30Zm0 90h40v-30h-40v30Zm0 314q10-5 19.5-7.5T260-358v-242h-40v254Zm360 26Z"/>
    </Icon>
  );
});

IconMaterialDinnerDining.displayName = 'OnesyIconMaterialDinnerDining';

export default IconMaterialDinnerDining;
