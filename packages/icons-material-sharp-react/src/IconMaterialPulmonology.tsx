import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPulmonology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pulmonology'

      short_name='Pulmonology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120H80v-287l132-353h188v160h-80v-80h-52L160-393v193h200v-120h80v200Zm440 0H520v-200h80v120h200v-193L692-680h-52v80h-80v-160h188l132 353v287ZM348-428Zm264 0Zm-132-76L376-400l-56-56 120-120v-304h80v304l120 120-56 56-104-104Z"/>
    </Icon>
  );
});

IconMaterialPulmonology.displayName = 'OnesyIconMaterialPulmonology';

export default IconMaterialPulmonology;
