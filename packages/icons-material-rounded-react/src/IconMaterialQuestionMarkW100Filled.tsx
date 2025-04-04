import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuestionMarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionMarkW100Filled'

      short_name='QuestionMark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M621-643q0-60-40.5-96.5T474-776q-43 0-74.5 16.5T345-708q-4 5-9.5 7t-10.5-1q-5-3-6.5-8.5T320-721q28-43 65.5-63t88.5-20q77 0 126 45t49 116q0 41-18 77.5T578-499q-50 43-69 73.5T490-358q0 6-4 10t-10 4q-6 0-10-4.5t-4-10.5q0-42 20.5-76.5T551-512q38-33 54-64t16-67ZM474-132q-11 0-19.5-8.5T446-160q0-11 8.5-19.5T474-188q11 0 19.5 8.5T502-160q0 11-8.5 19.5T474-132Z"/>
    </Icon>
  );
});

IconMaterialQuestionMarkW100Filled.displayName = 'OnesyIconMaterialQuestionMarkW100Filled';

export default IconMaterialQuestionMarkW100Filled;
