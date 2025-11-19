import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquare = (props: IIcon) => {

  return (
    <Icon
      name='Square'

      short_name='Square'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialSquare.displayName = 'OnesyIconMaterialSquare';

export default IconMaterialSquare;
