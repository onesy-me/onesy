import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClinicalNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotesW100Filled'

      short_name='ClinicalNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-339q-35 0-59.5-24.5T596-423q0-35 24.5-59.5T680-507q35 0 59.5 24.5T764-423q0 35-24.5 59.5T680-339ZM476-116v-110q32-19 66.5-31.5T613-276l67 89 66-89q37 5 71.5 18.5T884-226v110H476Zm-120-56H172v-616h616v192q-24-15-51.5-23t-56.5-8q-7 0-13 .5t-13 1.5v-17H306v28h302q-42 16-72.5 47T489-494H306v28h175q-5 26-4 52.5t9 52.5q-9 4-17.5 7.5T452-346H306v28h50v146Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotesW100Filled.displayName = 'OnesyIconMaterialClinicalNotesW100Filled';

export default IconMaterialClinicalNotesW100Filled;
