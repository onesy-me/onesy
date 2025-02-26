import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortW100Filled'

      short_name='Fort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-174v-83q0-5 2.09-10.44 2.08-5.44 5.91-9.56l72-72v-261.82L84-673q-8-8-13-19.28-5-11.28-5-23.72v-84q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h132v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h132v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v84q0 12.44-5 23.72T396-673l-62 62v77h292v-77l-62-62q-8-8-13-19.28-5-11.28-5-23.72v-84q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h132v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h132v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v84q0 12.44-5 23.72T876-673l-62 62.18V-349l72 72q3.83 4.12 5.91 9.56Q894-262 894-257v83q0 11-8.5 19.5T866-146H616q-12.75 0-21.37-8.63Q586-163.25 586-176v-64q0-43.73-31.19-74.86-31.2-31.14-75-31.14Q436-346 405-314.86q-31 31.13-31 74.86v63.51q0 13.49-8.62 21.99-8.63 8.5-21.38 8.5H94q-11 0-19.5-8.5T66-174Z"/>
    </Icon>
  );
});

IconMaterialFortW100Filled.displayName = 'OnesyIconMaterialFortW100Filled';

export default IconMaterialFortW100Filled;
