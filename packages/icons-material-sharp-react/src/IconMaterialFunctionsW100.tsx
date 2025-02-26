import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunctionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsW100'

      short_name='Functions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-212v-18l239-250-239-250v-18h376v29H344l228 239-228 240h324v28H292Z"/>
    </Icon>
  );
});

IconMaterialFunctionsW100.displayName = 'OnesyIconMaterialFunctionsW100';

export default IconMaterialFunctionsW100;
