import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFoundSavingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsW100Filled'

      short_name='NestFoundSavings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-212H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H578l-77 77q-9 9-21 9t-21-9l-77-77Zm98-134q75 0 124.5-52.5T654-520v-144q0-13-8.5-21.5T624-694H480q-70 0-122 49.5T306-520q0 26 10 54t29 57l-31 30q-5 5-5 10t5 10q5 5 10 4.5t10-5.5l31-28q25 20 56 31t59 11Zm32-211q5 5 5 10.5t-5 10.5L396-420q-5 5-10 4.5t-10-4.5q-5-5-5.5-10t4.5-10l117-117q5-5 10-5t10 5Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsW100Filled.displayName = 'OnesyIconMaterialNestFoundSavingsW100Filled';

export default IconMaterialNestFoundSavingsW100Filled;
