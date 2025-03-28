import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRunningWithErrorsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunningWithErrorsW100Filled'

      short_name='RunningWithErrors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M823.96-240q-5.96 0-9.96-4.02-4-4.03-4-9.98v-266q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v266q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm.04 90q-8.5 0-14.25-5.75T804-170q0-8.5 5.75-14.25T824-190q8.5 0 14.25 5.75T844-170q0 8.5-5.75 14.25T824-150Zm-360 18q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q116-407.65 116-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q391.79-828 464-828q63 0 123 22t105.82 63.88q10.18 9.3 10.18 21.71T694-699L515-521q-14 14-32.5 6.34Q464-522.31 464-542v-258q-134 0-227 93t-93 227q0 134 93 227t227 93q71 0 134-30.5T708-275q4-5 10-5t11 4q5 4 5 9.5t-4 10.5q-51 58-120 91t-146 33Z"/>
    </Icon>
  );
});

IconMaterialRunningWithErrorsW100Filled.displayName = 'OnesyIconMaterialRunningWithErrorsW100Filled';

export default IconMaterialRunningWithErrorsW100Filled;
