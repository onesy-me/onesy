import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalculateFilled = (props: IIcon) => {

  return (
    <Icon
      name='CalculateFilled'

      short_name='Calculate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialCalculateFilled.displayName = 'OnesyIconMaterialCalculateFilled';

export default IconMaterialCalculateFilled;
