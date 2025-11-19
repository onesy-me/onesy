import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackGroupFilled = (props: IIcon) => {

  return (
    <Icon
      name='StackGroupFilled'

      short_name='StackGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80v-240H80v-560h560v240h240v560H320Z"/>
    </Icon>
  );
};

IconMaterialStackGroupFilled.displayName = 'OnesyIconMaterialStackGroupFilled';

export default IconMaterialStackGroupFilled;
