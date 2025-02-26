import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReadMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreW100Filled'

      short_name='ReadMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M425-466H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h279L288-633q-4-4-3.5-9.5t4.5-9.67q3.67-3.83 9.33-3.83 5.67 0 9.67 4l150 151q9 9 9 21t-9 21L307-308q-4 4-9.5 3.5t-9.67-4.67Q284-313 284-318t4-9l137-139Zm105 148q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h284q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H530Zm0-296q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h284q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H530Zm120 148q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h164q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H650Z"/>
    </Icon>
  );
});

IconMaterialReadMoreW100Filled.displayName = 'OnesyIconMaterialReadMoreW100Filled';

export default IconMaterialReadMoreW100Filled;
