import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBlockingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingW100'

      short_name='AppBlocking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-336q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm0-28q20 0 37.5-6t34.5-18L602-552q-12 17-18 34.5t-6 37.5q0 48 34 82t82 34Zm92-44q14-18 19-35t5-37q0-48-34-82t-82-34q-20 0-37.5 6T622-572l164 164ZM312-92q-25 0-42.5-17.5T252-152v-656q0-25 17.5-42.5T312-868h336q25 0 42.5 17.5T708-808v110q0 6-4 10t-10 4q-6 0-10-4t-4-10v-48H280v532h400v-48q0-6 4-10t10-4q6 0 10 4t4 10v110q0 25-17.5 42.5T648-92H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-588h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingW100.displayName = 'OnesyIconMaterialAppBlockingW100';

export default IconMaterialAppBlockingW100;
