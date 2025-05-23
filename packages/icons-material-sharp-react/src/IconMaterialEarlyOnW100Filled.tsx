import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarlyOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnW100Filled'

      short_name='EarlyOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680.47-136q-43.53 0-74-30.47t-30.47-74Q576-284 606.47-314t74-30Q724-344 754-314t30 73.53q0 43.53-30 74T680.47-136ZM666-396v-68h28v68h-28Zm0 380v-68h28v68h-28Zm135-325-20-20 48-48 20 20-48 48ZM532-72l-20-19 48-49 20 20-48 48Zm304-154v-28h68v28h-68Zm-380 0v-28h68v28h-68ZM829-72l-48-48 20-20 48 48-20 20ZM560-341l-48-48 20-20 48 48-20 20ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v220H200v368h192v28H172Z"/>
    </Icon>
  );
});

IconMaterialEarlyOnW100Filled.displayName = 'OnesyIconMaterialEarlyOnW100Filled';

export default IconMaterialEarlyOnW100Filled;
