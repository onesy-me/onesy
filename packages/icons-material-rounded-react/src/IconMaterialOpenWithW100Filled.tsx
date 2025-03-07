import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenWithW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithW100Filled'

      short_name='OpenWith'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-170v-190q0-6 4-10t10-4q6 0 10 4t4 10v190l90-90q4-4 9.5-4.5T604-260q5 5 5 10t-5 10L501-137q-5 5-10 7t-11 2q-6 0-11-2t-10-7L356-240q-4-4-4.5-9.5T356-260q5-5 10-5t10 5l90 90ZM170-466l90 90q4 4 4.5 9.5T260-356q-5 5-10 5t-10-5L137-459q-5-5-7-10t-2-11q0-6 2-11t7-10l103-103q4-4 9.5-4.5T260-604q5 5 5 10t-5 10l-90 90h190q6 0 10 4t4 10q0 6-4 10t-10 4H170Zm620 0H600q-6 0-10-4t-4-10q0-6 4-10t10-4h190l-90-90q-4-4-4.5-9.5T700-604q5-5 10-5t10 5l103 103q5 5 7 10t2 11q0 6-2 11t-7 10L720-356q-4 4-9.5 4.5T700-356q-5-5-5-10t5-10l90-90ZM466-790l-90 90q-4 4-9.5 4.5T356-700q-5-5-5-10t5-10l103-103q5-5 10-7t11-2q6 0 11 2t10 7l103 103q4 4 4.5 9.5T604-700q-5 5-10 5t-10-5l-90-90v190q0 6-4 10t-10 4q-6 0-10-4t-4-10v-190Z"/>
    </Icon>
  );
});

IconMaterialOpenWithW100Filled.displayName = 'OnesyIconMaterialOpenWithW100Filled';

export default IconMaterialOpenWithW100Filled;
