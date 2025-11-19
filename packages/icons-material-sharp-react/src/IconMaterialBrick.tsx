import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrick = (props: IIcon) => {

  return (
    <Icon
      name='Brick'

      short_name='Brick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-480h120v-160h240v160h80v-160h240v160h120v480H80Zm80-80h640v-320H160v320Zm120-400h80v-80h-80v80Zm320 0h80v-80h-80v80ZM160-240h640-640Zm120-400h80-80Zm320 0h80-80Z"/>
    </Icon>
  );
};

IconMaterialBrick.displayName = 'OnesyIconMaterialBrick';

export default IconMaterialBrick;
