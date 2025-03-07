import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDownW100'

      short_name='TextSelectMoveDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-760q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm273 423-93-93q-4-4-4.5-9.5t4.72-10.72Q371-455 376-454.5q5 .5 10 4.5l80 79v-269q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v269l80-79q4-4 9.5-4.5t10.72 4.72Q599-445 599-440q0 5-5 10l-93 93q-9 9-21 9t-21-9ZM186-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDownW100.displayName = 'OnesyIconMaterialTextSelectMoveDownW100';

export default IconMaterialTextSelectMoveDownW100;
