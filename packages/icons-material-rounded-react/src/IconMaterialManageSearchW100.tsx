import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchW100'

      short_name='ManageSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-254q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h349q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Zm0-189q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h144q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Zm0-189q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h144q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Zm410 261q-62.67 0-106.83-43Q405-457 405-519.5T449.24-625q44.23-43 107-43Q619-668 663-625q44 43 44 105 0 26-9 50.5T672-425l146 143q5 3.67 5 9.33 0 5.67-5 10.67-3.67 4-9.33 4-5.67 0-10.67-4L652-405q-21 16-45.5 25t-50.5 9Zm0-28q51.25 0 87.13-35Q679-469 679-519.5T643.13-605q-35.88-35-87.13-35-51.25 0-87.12 35Q433-570 433-519.5t35.88 85.5q35.87 35 87.12 35Z"/>
    </Icon>
  );
});

IconMaterialManageSearchW100.displayName = 'OnesyIconMaterialManageSearchW100';

export default IconMaterialManageSearchW100;
