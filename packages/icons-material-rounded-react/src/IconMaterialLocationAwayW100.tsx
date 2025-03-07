import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationAwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwayW100'

      short_name='LocationAway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-471ZM192-172q-24.75 0-42.37-17.63Q132-207.25 132-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q8.3-6 17.34-9 9.05-3 18.86-3 9.8 0 18.71 3 8.92 3 17.09 9l91 69q6 5 6 10t-3.12 10.03q-3.12 5.03-8.5 6.5Q516-653 510-658l-91-69q-8-7-19-7t-19 7L173-570q-6 5-9.5 11.5T160-544v312q0 14 9 23t23 9h120q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H192Zm448-138q50 0 97.5 12.5T828-259q11 7 18.5 17.5T854-218v18q0 11-7.5 19.5T826-172H454q-11 0-19.5-8.5T426-200v-18q0-13 7.5-23.5T452-259q43-26 90.5-38.5T640-310ZM454-200h372v-28q-43-25-89.5-39.5T640-282q-50 0-96.5 14.5T454-228v28Zm186.12-207q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T706-501q0-27-19.5-46.5T640-567q-27 0-46.5 19.5T574-501q0 27 19.5 46.5T640-435Zm0 235Z"/>
    </Icon>
  );
});

IconMaterialLocationAwayW100.displayName = 'OnesyIconMaterialLocationAwayW100';

export default IconMaterialLocationAwayW100;
