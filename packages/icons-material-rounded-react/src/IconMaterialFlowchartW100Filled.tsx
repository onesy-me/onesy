import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlowchartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlowchartW100Filled'

      short_name='Flowchart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-212v-73H466v-181H345v72H132v-173h213v73h121v-182h148v-73h214v174H614v-73H494v335h120v-72h214v173H614Z"/>
    </Icon>
  );
});

IconMaterialFlowchartW100Filled.displayName = 'OnesyIconMaterialFlowchartW100Filled';

export default IconMaterialFlowchartW100Filled;
