import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoicemailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoicemailW100'

      short_name='Voicemail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360q-58.33 0-99.17-40.76-40.83-40.77-40.83-99Q140-558 180.76-599q40.77-41 99-41Q338-640 379-599.17q41 40.84 41 99.17 0 34-14 64t-42 48h232q-28-18-42-48t-14-64q0-58.33 40.76-99.17 40.77-40.83 99-40.83Q738-640 779-599.24q41 40.77 41 99Q820-442 779.17-401q-40.84 41-99.17 41H280Zm-.03-28q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5Zm400 0q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5Z"/>
    </Icon>
  );
});

IconMaterialVoicemailW100.displayName = 'OnesyIconMaterialVoicemailW100';

export default IconMaterialVoicemailW100;
