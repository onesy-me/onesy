import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexNoWrap = (props: IIcon) => {

  return (
    <Icon
      name='FlexNoWrap'

      short_name='FlexNoWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-280v-400h240v400H40Zm320 0v-400h240v400H360Zm320 0v-400h240v400H680Zm-560-80h80v-240h-80v240Zm640 0h80v-240h-80v240Z"/>
    </Icon>
  );
};

IconMaterialFlexNoWrap.displayName = 'OnesyIconMaterialFlexNoWrap';

export default IconMaterialFlexNoWrap;
