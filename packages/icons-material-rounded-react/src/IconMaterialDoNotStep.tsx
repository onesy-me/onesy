import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotStep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStep'

      short_name='DoNotStep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m740-333-56-56 179-179q23 23 23 56t-23 56L740-333Zm-84-85-57-56 123-123-170-170-123 123-57-57 123-123q23-23 56.5-23t56.5 23l227 227-179 179ZM763-84 553-293 420-160H120q-33 0-56.5-23.5T40-240v-25q0-26 14.5-46T92-340q17-7 37.5-17t41.5-24l55 55q6 6 14 6t14-6q6-6 6-14t-6-14l-51-52 15.5-15.5Q226-429 234-438l51 51q6 6 14 6t14-6q6-6 6-14t-6-14l-56-56q6-11 10.5-22t7.5-23l68 69q6 6 14 6t14-6q6-6 6.5-14t-5.5-14L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l678 679q11 11 11.5 27.5T819-84q-11 11-28 11t-28-11ZM122-240h265l110-110-67-67-133 133q-23 23-55 22.5T184-284l-8-7q-14 6-27 12.5T122-266v26Zm308-177Zm107-119Z"/>
    </Icon>
  );
});

IconMaterialDoNotStep.displayName = 'OnesyIconMaterialDoNotStep';

export default IconMaterialDoNotStep;
