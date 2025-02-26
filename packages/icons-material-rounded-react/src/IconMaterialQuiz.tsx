import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuiz = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Quiz'

      short_name='Quiz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm0-128q11 0 20.5-8t11.5-21q2-12 8.5-22t23.5-27q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-33 0-60 15t-43 43q-6 10-1 21t17 16q11 5 21.5 1t17.5-14q9-13 21-19.5t27-6.5q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-29 25-37 38.5T531-518q-1 12 7.5 21t21.5 9ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialQuiz.displayName = 'OnesyIconMaterialQuiz';

export default IconMaterialQuiz;
