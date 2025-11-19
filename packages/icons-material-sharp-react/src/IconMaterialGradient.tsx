import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradient = (props: IIcon) => {

  return (
    <Icon
      name='Gradient'

      short_name='Gradient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80ZM120-120v-720h720v720H120Zm160-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z"/>
    </Icon>
  );
};

IconMaterialGradient.displayName = 'OnesyIconMaterialGradient';

export default IconMaterialGradient;
