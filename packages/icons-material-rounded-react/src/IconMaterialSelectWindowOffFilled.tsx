import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectWindowOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowOffFilled'

      short_name='SelectWindowOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-57 407-440H160v280h480v-161l80 80v81q0 33-23.5 56.5T640-80H160q-33 0-56.5-23.5T80-160v-360q0-33 23.5-56.5T160-600h80v-7L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Zm89-743v360q0 33-23.5 56.5T800-360h-52q-16 0-30.5-6T692-383L543-532q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h68q33 0 56.5 23.5T720-520v80h80v-280H388q-16 0-30.5-6T332-743l-69-69q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h508q33 0 56.5 23.5T880-800Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowOffFilled.displayName = 'OnesyIconMaterialSelectWindowOffFilled';

export default IconMaterialSelectWindowOffFilled;
