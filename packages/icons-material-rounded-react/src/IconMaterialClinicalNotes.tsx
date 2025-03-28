import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClinicalNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotes'

      short_name='ClinicalNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440q0 17 11.5 28.5T680-400ZM480-40q-17 0-28.5-11.5T440-80v-76q0-21 10-39.5t28-29.5q32-19 54-26.5t59-13.5q12-2 24 .5t20 11.5l45 53 44-53q8-10 20-12t24 0q37 6 59 13.5t54 26.5q18 11 28.5 29.5T920-156v76q0 17-11.5 28.5T880-40H480Zm39-80h123l-54-66q-18 5-35 13t-34 17v36Zm199 0h122v-36q-16-10-33-17.5T772-186l-54 66Zm-76 0Zm76 0Zm-38-320ZM200-200v-560 137-17 440Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q-16-20-35-38t-45-24v-138H200v560h166q-3 11-4.5 22t-1.5 22v36H200Zm120-480h240q26-20 57-30t63-10q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160h160q0-21 4.5-41t12.5-39H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160h98q11-9 23.5-16t25.5-13v-11q0-16-8.5-28T427-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotes.displayName = 'OnesyIconMaterialClinicalNotes';

export default IconMaterialClinicalNotes;
