import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewHeadlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineW100Filled'

      short_name='ViewHeadline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199-392q-5 0-9-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h561q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4H199Zm0 148q-5 0-9-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h561q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4H199Zm0-296q-5 0-9-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h561q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4H199Zm0-148q-5 0-9-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h561q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4H199Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineW100Filled.displayName = 'OnesyIconMaterialViewHeadlineW100Filled';

export default IconMaterialViewHeadlineW100Filled;
