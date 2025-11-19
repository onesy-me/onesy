import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexWrapFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlexWrapFilled'

      short_name='FlexWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-240-80h80v-200h-80v200ZM40-520v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-560-80h80v-200h-80v200Zm640 0h80v-200h-80v200Z"/>
    </Icon>
  );
};

IconMaterialFlexWrapFilled.displayName = 'OnesyIconMaterialFlexWrapFilled';

export default IconMaterialFlexWrapFilled;
