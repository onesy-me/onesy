import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPediatricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100'

      short_name='Pediatrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-650q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126v-96q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v96h126q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H340Zm52 496q-24.75 0-42.37-17.63Q332-189.25 332-214v-306q0-37.5 26.25-63.75T422-610h116q37.5 0 63.75 26.25T628-520v306q0 24.75-17.62 42.37Q592.75-154 568-154H392Zm-32-28h208q14 0 23-9t9-23v-306q0-26.35-17.83-44.17Q564.35-582 538-582H422q-26.35 0-44.17 17.83Q360-546.35 360-520v53h80q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-80v114h80q6 0 10 4.04 4 4.03 4 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-80v115Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100.displayName = 'OnesyIconMaterialPediatricsW100';

export default IconMaterialPediatricsW100;
