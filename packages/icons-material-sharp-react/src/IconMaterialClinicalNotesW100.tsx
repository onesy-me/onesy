import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClinicalNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotesW100'

      short_name='ClinicalNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-339q-35 0-59.5-24.5T596-423q0-35 24.5-59.5T680-507q35 0 59.5 24.5T764-423q0 35-24.5 59.5T680-339Zm0-28q23 0 39.5-16.5T736-423q0-23-16.5-39.5T680-479q-23 0-39.5 16.5T624-423q0 23 16.5 39.5T680-367ZM476-116v-110q32-19 66.5-31.5T613-276l67 89 66-89q37.41 4.8 71.71 18.4Q852-244 884-226v110H476Zm27-28h174l-75-100q-26.31 5.95-51.15 15.48Q526-219 503-206v62Zm180 0h173v-62q-23-13-47.85-22-24.84-9-51.15-15l-74 99Zm-6 0Zm6 0Zm-327-28H172v-616h616v192q-7-5-13.5-8.5T760-611v-149H200v560h156v28Zm-50-442h302q11-5 22.5-7t23.5-4v-17H306v28Zm0 148h175q2-8 4-14.5t4-13.5H306v28Zm0 148h89l57-27v-1H306v28Zm50 118H200v-560h560v149q-19-8-39.17-12T680-627q-84.66 0-144.33 59.67Q476-507.66 476-423q0 16.56 2.5 31.78Q481-376 486-361l-130 61v100Zm324-223Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotesW100.displayName = 'OnesyIconMaterialClinicalNotesW100';

export default IconMaterialClinicalNotesW100;
