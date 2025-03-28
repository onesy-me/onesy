import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuizW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizW100Filled'

      short_name='Quiz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-384q11 0 19.5-8.5T562-412q0-11-8.5-19.5T534-440q-11 0-19.5 8.5T506-412q0 11 8.5 19.5T534-384Zm-14-108h28q2-24 8.5-36.5T588-564q24-21 34-39t10-41q0-39-28-65.5T534-736q-31 0-55.5 16.5T440-674l26 12q12-23 28.5-34.5T534-708q30 0 50 18t20 46q0 17-9.5 31.5T562-578q-23 20-32.5 39t-9.5 47ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialQuizW100Filled.displayName = 'OnesyIconMaterialQuizW100Filled';

export default IconMaterialQuizW100Filled;
