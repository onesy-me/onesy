import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddW100'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-650h369-38 12-343Zm388 0h172-172Zm-373-28h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm185 239 80-40 80 40v-211H400v211ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-417q0-10.5 3.5-20.25T186-687l66-79q8-10.62 20-16.31 12-5.69 26.15-5.69h361.7q14.15 0 26.53 5.69Q698.75-776.62 707-766l67 81q7 8.41 10.5 18.35 3.5 9.94 3.5 20.65v123q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-127H588v222q-4 4-10.5 12t-8.5 13l-89-44-65 32q-15 8-29-.75T372-442v-208H200v418q0 14 9 23t23 9h302q5.95 0 9.97 3.9 4.03 3.9 4.03 9.67 0 5.43-4.03 9.93-4.02 4.5-9.97 4.5H232Zm532.96 31q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H645q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H779v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM200-650h369-38 12-343Z"/>
    </Icon>
  );
});

IconMaterialBoxAddW100.displayName = 'OnesyIconMaterialBoxAddW100';

export default IconMaterialBoxAddW100;
