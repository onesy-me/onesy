import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchW100'

      short_name='ImageSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h154q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-188q0-6 4-10t10-4q6 0 10 4t4 10v188q0 26-17 43t-43 17H232Zm216-146 88-109q5-6 12-6t12 6l72 97q5 8 1 16t-13 8H348q-9 0-13-8t2-16l36-47q5-6 11.5-6t11.5 5l52 60Zm196-254q-54 0-91-37t-37-91q0-54 37-91t91-37q54 0 91 37t37 91q0 23-7 43.5T744-616l114 114q4 4 4.5 9.5T858-482q-5 5-10 5t-10-5L722-598q-20 15-37.5 20.5T644-572Zm0-28q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialImageSearchW100.displayName = 'OnesyIconMaterialImageSearchW100';

export default IconMaterialImageSearchW100;
