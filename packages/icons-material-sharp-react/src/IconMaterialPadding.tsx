import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPadding = (props: IIcon) => {

  return (
    <Icon
      name='Padding'

      short_name='Padding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialPadding.displayName = 'OnesyIconMaterialPadding';

export default IconMaterialPadding;
