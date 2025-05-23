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
      <path d="M462-344q0-47 17.5-84t71.5-84q35-32 52.5-62.5T621-643q0-57-39.5-95T474-776q-52 0-84 22t-53 59l-25-13q27-47 66-71.5t96-24.5q84 0 129.5 48.5T649-643q0 42-18.5 78.5T578-499q-57 49-72.5 81.5T490-344h-28Zm12 212q-11 0-19.5-8.5T446-160q0-11 8.5-19.5T474-188q11 0 19.5 8.5T502-160q0 11-8.5 19.5T474-132Z"/>
    </Icon>
  );
});

IconMaterialQuestionMarkW100Filled.displayName = 'OnesyIconMaterialQuestionMarkW100Filled';

export default IconMaterialQuestionMarkW100Filled;
