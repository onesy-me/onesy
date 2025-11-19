import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalculate = (props: IIcon) => {

  return (
    <Icon
      name='Calculate'

      short_name='Calculate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCalculate.displayName = 'OnesyIconMaterialCalculate';

export default IconMaterialCalculate;
