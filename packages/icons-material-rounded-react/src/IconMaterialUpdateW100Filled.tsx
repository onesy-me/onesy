import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateW100Filled'

      short_name='Update'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-172q-64.08 0-120.04-24Q305-220 263-262q-42-42-66-97.94-24-55.95-24-120Q173-544 197-600t66-98q42-42 97.96-66 55.96-24 120.04-24 65 0 124 26.5T709-688v-82q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v100q0 12.75-8.62 21.37Q719.75-640 707-640H607q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h82q-42-43-95-67.5T481-760q-117 0-198.5 81.5T201-480q0 117 81.5 198.5T481-200q100 0 176.5-63.5T755-424q2-7 6.5-11t10.8-3q6.7 1 9.2 7 2.5 6 .5 13-21 108-105 177t-196 69Zm14-314 126 126q4 4 4.5 9.5T621-340q-5 5-10 5t-10-5L476-465q-5-5-7-10.22-2-5.21-2-10.78v-180q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v180Z"/>
    </Icon>
  );
});

IconMaterialUpdateW100Filled.displayName = 'OnesyIconMaterialUpdateW100Filled';

export default IconMaterialUpdateW100Filled;
