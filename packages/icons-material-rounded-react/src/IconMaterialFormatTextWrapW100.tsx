import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrapW100'

      short_name='FormatTextWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M225.96-212q-5.96 0-9.96-4.02-4-4.03-4-9.98v-508q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v508q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm508 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-508q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v508q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM428-305l-74-74q-9-9-9-21t9-21l75-74q3.75-3.67 9.38-3.83 5.62-.17 9.79 3.83 3.83 3.67 3.83 9.33 0 5.67-4 9.67l-62 62h120q45 0 75.5-30.5T612-520q0-45-30.5-75.5T506-626H334q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h172q56 0 95 39t39 95q0 56-39 95t-95 39H386l62 62q4 3.75 4 9.37 0 5.63-4 9.63-4 5-10 4.5t-10-4.5Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrapW100.displayName = 'OnesyIconMaterialFormatTextWrapW100';

export default IconMaterialFormatTextWrapW100;
