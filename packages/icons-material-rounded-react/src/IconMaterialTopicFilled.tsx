import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicFilled'

      short_name='Topic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm120-160h240q17 0 28.5-11.5T560-360q0-17-11.5-28.5T520-400H280q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm0-160h400q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560H280q-17 0-28.5 11.5T240-520q0 17 11.5 28.5T280-480Z"/>
    </Icon>
  );
});

IconMaterialTopicFilled.displayName = 'OnesyIconMaterialTopicFilled';

export default IconMaterialTopicFilled;
