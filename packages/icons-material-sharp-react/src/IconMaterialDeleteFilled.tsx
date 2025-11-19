import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteFilled = (props: IIcon) => {

  return (
    <Icon
      name='DeleteFilled'

      short_name='Delete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM200-120v-600h-40v-80h200v-40h240v40h200v80h-40v600H200Z"/>
    </Icon>
  );
};

IconMaterialDeleteFilled.displayName = 'OnesyIconMaterialDeleteFilled';

export default IconMaterialDeleteFilled;
