import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalator = (props: IIcon) => {

  return (
    <Icon
      name='Escalator'

      short_name='Escalator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-240h192l200-360h128v-120H548L348-360H220v120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialEscalator.displayName = 'OnesyIconMaterialEscalator';

export default IconMaterialEscalator;
