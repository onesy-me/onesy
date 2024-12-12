import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhpW100'

      short_name='Php'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M142-390v-172q0-9 7-15.5t16-6.5h117q12 0 20 9t8 21v74q0 12-8 20t-20 8H170v62q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03Zm264 0v-180q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v66h112v-66q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v180q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-86H434v86q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03Zm266 0v-172q0-9 7-15.5t16-6.5h117q12 0 20 9t8 21v74q0 12-8 20t-20 8H700v62q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03Zm-502-90h112v-74H170v74Zm530 0h112v-74H700v74Z"/>
    </Icon>
  );
});

IconMaterialPhpW100.displayName = 'OnesyIconMaterialPhpW100';

export default IconMaterialPhpW100;
